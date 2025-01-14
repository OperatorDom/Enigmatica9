ServerEvents.tags('item', (event) => {
    event
        .get('forge:lights')
        .add([
            /_lantern/,
            /_lamp/,
            /torch/,
            /fire_pit/,
            /shiny_flower/,
            /floating_flower/,
            /candle/,
            /campfire/,
            /_glowcane/,
            /illumin/,
            /sconce/,
            /candelabra/,
            /chandelier/,
            /brazier/,
            /neon_light/,
            'minecraft:beacon',
            'minecraft:end_rod',
            'minecraft:glowstone',
            'minecraft:lava_bucket',
            'minecraft:magma_block',
            'minecraft:shroomlight',
            'immersiveengineering:balloon',
            'immersiveengineering:lantern'
        ])
        .remove(['occultism:magic_lamp_empty', 'hexerei:candle_dipper']);
});
