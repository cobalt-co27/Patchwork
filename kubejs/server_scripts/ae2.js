ServerEvents.recipes(event => {
    function crusher(input, output, time) {
        event.custom({
            "type": "neepmeat:grinding",
            "input": input,
            "output": output,
            "processtime": time
        })
    }

    event.remove({output: "ae2:inscriber"})
    event.remove({output: "ae2:charger"})
    event.remove({output: "ae2things:advanced_inscriber"})

    // Fluix
    event.remove({id: "spectrum:mod_integration/ae2/fusion_shrine/fluix_crystal"})
    event.custom({
        "type": "lib39:soaking",
        "ingredients": [ { "item": "ae2:charged_certus_quartz_crystal" } ],
        "catalyst": { "fluid": "spectrum:mud" },
        "result": { "item": "ae2:fluix_crystal" },
        "time": 10
    })
    event.custom({
        "type": "lib39:soaking",
        "ingredients": [ { "item": "ae2:charged_certus_quartz_crystal" } ],
        "catalyst": { "fluid": "neepmeat:pinkdrink" },
        "result": { "item": "ae2:fluix_crystal" },
        "time": 10
    })
    event.custom({
        "type": "lib39:soaking",
        "ingredients": [ { "item": "ae2:charged_certus_quartz_crystal" } ],
        "catalyst": { "fluid": "yttr:void" },
        "result": { "item": "ae2:fluix_crystal" },
        "time": 10
    })

    // Presses
    event.shaped(
        "8x ae2:calculation_processor_press",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:iron_ingots",
            "P": "ae2:calculation_processor_press"
        }
    )
    event.shaped(
        "8x ae2:engineering_processor_press",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:iron_ingots",
            "P": "ae2:engineering_processor_press"
        }
    )
    event.shaped(
        "8x ae2:logic_processor_press",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:iron_ingots",
            "P": "ae2:logic_processor_press"
        }
    )
    event.shaped(
        "8x ae2:silicon_press",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:iron_ingots",
            "P": "ae2:silicon_press"
        }
    )

    // Circuits
    event.shaped(
        "8x ae2:printed_calculation_processor",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "ae2:certus_quartz_crystal",
            "P": "ae2:calculation_processor_press"
        }
    )
    event.shaped(
        "8x ae2:printed_engineering_processor",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:diamonds",
            "P": "ae2:engineering_processor_press"
        }
    )
    event.shaped(
        "8x ae2:printed_logic_processor",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:gold_ingots",
            "P": "ae2:logic_processor_press"
        }
    )
    event.shaped(
        "16x ae2:printed_silicon",
        [
            "MMM",
            "MPM",
            "MMM"
        ],
        {
            "M": "#c:silicon",
            "P": "ae2:silicon_press"
        }
    )

    // Processors
    event.shapeless(
        "ae2:logic_processor",
        ["botania:redstone_root", "ae2:printed_silicon", "botania:redstone_root", "ae2:printed_logic_processor"]
    )
    event.shapeless(
        "ae2:calculation_processor",
        ["botania:redstone_root", "ae2:printed_silicon", "botania:redstone_root", "ae2:printed_calculation_processor"]
    )
    event.shapeless(
        "ae2:engineering_processor",
        ["botania:redstone_root", "ae2:printed_silicon", "botania:redstone_root", "ae2:printed_engineering_processor"]
    )

    // Meteorite Compass
    event.shaped(
        "ae2:meteorite_compass",
        [
            " S ",
            "SGS",
            " S "
        ],
        {
            S: "minecraft:smooth_stone",
            G: ["minecraft:amethyst_shard", "spectrum:topaz_shard", "spectrum:citrine_shard"]
        }
    )

    // Dusts
    crusher(
        {"resource": "ae2:sky_stone_block", "amount": 1},
        {"resource": "ae2:sky_dust", "min": 1, "max": 1},
        20
    )

    crusher(
        {"resource": "ae2:certus_quartz_crystal", "amount": 1},
        {"resource": "ae2:certus_quartz_dust", "min": 1, "max": 1},
        20
    )

    crusher(
        {"resource": "ae2:charged_certus_quartz_crystal", "amount": 1},
        {"resource": "ae2:certus_quartz_dust", "min": 1, "max": 1},
        20
    )

    crusher(
        {"resource": "ae2:fluix_crystal", "amount": 1},
        {"resource": "ae2:fluix_dust", "min": 1, "max": 1},
        20
    )

    crusher(
        {"resource": "neepmeat:crushed_ender_pearl", "amount": 1},
        {"resource": "ae2:ender_dust", "min": 1, "max": 1},
        20
    )
})

ServerEvents.tags("item", event => {
    event.add("yttr:void_immune", "ae2:charged_certus_quartz_crystal")
    event.add("yttr:void_immune", "ae2:fluix_crystal")
})
