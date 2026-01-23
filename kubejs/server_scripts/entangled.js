ServerEvents.recipes(event => {
    // It won't let me change it the normal way for some reason :(
    event.replaceInput(
        {input: "minecraft:chest", output: "entangled:block"},
        "minecraft:chest",
        "ae2:fluix_pearl"
    )
    event.replaceInput(
        {input: "minecraft:obsidian", output: "entangled:block"},
        "minecraft:obsidian",
        "yttr:scorched_obsidian"
    )

    event.remove({output: "entangled:item"})
    event.shaped(
        "entangled:item",
        [
            " F ",
            " WM",
            "O  "
        ],
        {
            O: "yttr:scorched_obsidian",
            M: "botania:mana_diamond",
            F: "ae2:fluix_pearl",
            W: "#c:wrenches"
        }
    )
})
