ServerEvents.recipes(event => {
    event.remove({output: "heartstone:heartstone"})
    event.shaped(
        "heartstone:heartstone",
        [
            "rpr",
            "pHp",
            "rpr"
        ],
        {
            r: "#botania:petals/red",
            p: "#botania:petals/pink",
            H: "neepmeat:reanimated_heart"
        }
    )
    event.shaped(
        "heartstone:heartstone",
        [
            "prp",
            "rHr",
            "prp"
        ],
        {
            r: "#botania:petals/red",
            p: "#botania:petals/pink",
            H: "neepmeat:reanimated_heart"
        }
    )
})
