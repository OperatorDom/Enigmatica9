ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            output: '2x mekanism:teleportation_core',
            inputs: ['#forge:essences/conjuration', 'quark:rainbow_rune', 'quark:rainbow_rune'],
            reagents: ['occultism:spirit_attuned_gem'],
            sourceCost: 500,
            id: `${id_prefix}teleportation_core`
        },
        {
            output: 'occultism:storage_controller_base',
            inputs: ['#forge:ingots/energized_steel', '#forge:ingots/energized_steel', '#forge:ingots/energized_steel'],
            reagents: ['occultism:otherstone_pedestal'],
            sourceCost: 2000,
            id: `${id_prefix}storage_controller_base`
        },
        {
            output: Item.of('occultism:dimensional_matrix', '{spiritName:""}'),
            inputs: ['rftoolsbase:dimensionalshard', 'rftoolsbase:dimensionalshard', 'rftoolsbase:dimensionalshard'],
            reagents: ['mekanism:teleportation_core'],
            sourceCost: 2000,
            id: `${id_prefix}dimensional_matrix`
        },
        {
            output: 'occultism:stable_wormhole',
            inputs: ['rftoolsbase:dimensionalshard', 'rftoolsbase:dimensionalshard', 'rftoolsbase:dimensionalshard'],
            reagents: ['occultism:wormhole_frame'],
            sourceCost: 2000,
            id: `${id_prefix}stable_wormhole`
        },
        {
            output: 'powah:binding_card_dim',
            inputs: ['rftoolsbase:dimensionalshard', 'rftoolsbase:dimensionalshard', 'rftoolsbase:dimensionalshard'],
            reagents: ['powah:binding_card'],
            sourceCost: 2000,
            id: `${id_prefix}binding_card_dim`
        },
        {
            output: '2x ae2:crafting_unit',
            inputs: [
                'pneumaticcraft:logistics_core',
                'naturesaura:infused_stone',
                'powah:capacitor_niotic',
                'naturesaura:infused_stone',
                'pneumaticcraft:logistics_core',
                'naturesaura:infused_stone',
                'powah:capacitor_niotic',
                'naturesaura:infused_stone'
            ],
            reagents: ['ars_nouveau:wixie_charm'],
            sourceCost: 5000,
            id: `${id_prefix}crafting_unit`
        },
        {
            output: 'pneumaticcraft:drill_bit_diamond',
            inputs: ['#forge:ingots/sky', 'ars_nouveau:glyph_aoe'],
            reagents: ['pneumaticcraft:drill_bit_compressed_iron'],
            sourceCost: 3000,
            id: `${id_prefix}drill_bit_diamond`
        },
        {
            output: 'create:brass_hand',
            inputs: ['#forge:essences/manipulation', '#forge:leather', '#forge:leather', '#forge:leather'],
            reagents: ['#forge:ingots/energized_steel'],
            sourceCost: 1000,
            id: `${id_prefix}brass_hand`
        },
        {
            output: 'immersiveengineering:mold_plate',
            inputs: ['#forge:plates', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:compressed_stone_slab'],
            sourceCost: 1000,
            id: `${id_prefix}mold_plate`
        },
        {
            output: 'immersiveengineering:mold_wire',
            inputs: ['#forge:wires', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:compressed_stone_slab'],
            sourceCost: 1000,
            id: `${id_prefix}mold_wire`
        },
        {
            output: 'immersiveengineering:mold_rod',
            inputs: ['#forge:rods/all_metal', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:compressed_stone_slab'],
            sourceCost: 1000,
            id: `${id_prefix}mold_rod`
        },
        {
            output: 'immersiveengineering:mold_gear',
            inputs: ['create:cogwheel', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:compressed_stone_slab'],
            sourceCost: 1000,
            id: `${id_prefix}mold_gear`
        },
        {
            output: 'pneumaticcraft:volume_upgrade',
            inputs: ['pneumaticcraft:pressure_chamber_wall', '#forge:essences/air', '#forge:essences/air'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}volume_upgrade`
        },
        {
            output: 'pneumaticcraft:range_upgrade',
            inputs: ['#forge:gems/source', '#forge:essences/manipulation', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}range_upgrade`
        },
        {
            output: 'pneumaticcraft:security_upgrade',
            inputs: ['pneumaticcraft:pressure_gauge', '#forge:essences/abjuration', '#forge:essences/abjuration'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}security_upgrade`
        },
        {
            output: 'pneumaticcraft:speed_upgrade',
            inputs: ['#forge:gems/fluix', '#forge:essences/water', '#forge:essences/water'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}speed_upgrade`
        },
        {
            output: 'pneumaticcraft:item_life_upgrade',
            inputs: ['ars_nouveau:mendosteen_pod', '#forge:essences/abjuration', '#forge:essences/abjuration'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}item_life_upgrade`
        },
        {
            output: 'pneumaticcraft:entity_tracker_upgrade',
            inputs: ['ae2:charged_certus_quartz_crystal', '#forge:essences/air', '#forge:essences/air'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}entity_tracker_upgrade`
        },
        {
            output: 'pneumaticcraft:block_tracker_upgrade',
            inputs: ['ae2:charged_certus_quartz_crystal', '#forge:essences/earth', '#forge:essences/earth'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}block_tracker_upgrade`
        },
        {
            output: 'pneumaticcraft:dispenser_upgrade',
            inputs: ['ae2:certus_quartz_crystal', '#forge:essences/manipulation', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}dispenser_upgrade`
        },
        {
            output: 'pneumaticcraft:magnet_upgrade',
            inputs: ['minecraft:lodestone', '#forge:essences/manipulation', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}magnet_upgrade`
        },
        {
            output: 'pneumaticcraft:minigun_upgrade',
            inputs: ['pneumaticcraft:minigun', '#forge:essences/fire', '#forge:essences/fire'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}minigun_upgrade`
        },
        {
            output: '4x pneumaticcraft:inventory_upgrade',
            inputs: ['#forge:essences/abjuration', 'thermal:fluid_reservoir', 'thermal:satchel'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}inventory_upgrade`
        },
        {
            output: 'pneumaticcraft:standby_upgrade',
            inputs: ['#comforts:sleeping_bags', '#forge:essences/abjuration', '#forge:essences/abjuration'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}standby_upgrade`
        },
        {
            output: 'pneumaticcraft:charging_upgrade',
            inputs: ['pneumaticcraft:charging_module', '#forge:essences/air', '#forge:essences/air'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}charging_upgrade`
        },
        {
            output: 'pneumaticcraft:stomp_upgrade',
            inputs: ['#forge:storage_blocks/lead', '#forge:essences/earth', '#forge:essences/earth'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}stomp_upgrade`
        },
        {
            output: 'pneumaticcraft:flippers_upgrade',
            inputs: ['thermal:diving_boots', '#forge:essences/water', '#forge:essences/water'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}flippers_upgrade`
        },
        {
            output: 'pneumaticcraft:scuba_upgrade',
            inputs: ['thermal:diving_helmet', '#forge:essences/water', '#forge:essences/water'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}scuba_upgrade`
        },
        {
            output: 'pneumaticcraft:coordinate_tracker_upgrade',
            inputs: ['ars_nouveau:ritual_scrying', '#forge:essences/manipulation', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}coordinate_tracker_upgrade`
        },
        {
            output: 'pneumaticcraft:pneumatic_helmet',
            inputs: [
                'pneumaticcraft:module_expansion_card',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron'
            ],
            reagents: [
                'pneumaticcraft:compressed_iron_helmet',
                'minecraft:diamond_helmet',
                'naturesaura:sky_helmet',
                'twilightforest:knightmetal_helmet',
                'twilightforest:steeleaf_helmet'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}pneumatic_helmet`
        },
        {
            output: 'pneumaticcraft:pneumatic_chestplate',
            inputs: [
                'pneumaticcraft:module_expansion_card',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron'
            ],
            reagents: [
                'pneumaticcraft:compressed_iron_chestplate',
                'minecraft:diamond_chestplate',
                'naturesaura:sky_chest',
                'twilightforest:knightmetal_chestplate',
                'twilightforest:steeleaf_chestplate'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}pneumatic_chestplate`
        },
        {
            output: 'pneumaticcraft:pneumatic_leggings',
            inputs: [
                'pneumaticcraft:module_expansion_card',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron'
            ],
            reagents: [
                'pneumaticcraft:compressed_iron_leggings',
                'minecraft:diamond_leggings',
                'naturesaura:sky_pants',
                'twilightforest:knightmetal_leggings',
                'twilightforest:steeleaf_leggings'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}pneumatic_leggings`
        },
        {
            output: 'pneumaticcraft:pneumatic_boots',
            inputs: [
                'pneumaticcraft:module_expansion_card',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron'
            ],
            reagents: [
                'pneumaticcraft:compressed_iron_boots',
                'minecraft:diamond_boots',
                'naturesaura:sky_shoes',
                'twilightforest:knightmetal_boots',
                'twilightforest:steeleaf_boots'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}pneumatic_boots`
        },
        {
            output: Item.of('mekanism:mekasuit_helmet', {
                mekData: { modules: { 'mekanism:color_modulation_unit': { amount: 1, color: -14276057, enabled: 1 } } }
            }),
            inputs: [
                'immersiveengineering:component_electronic',
                '#forge:fabrics/infused',
                '#forge:gems/infused_diamond',
                '#forge:fabrics/infused',
                'ars_elemental:glyph_bubble_shield',
                '#forge:fabrics/infused',
                '#forge:gems/infused_diamond',
                '#forge:fabrics/infused'
            ],
            reagents: ['minecraft:netherite_helmet'],
            sourceCost: 0,
            id: `${id_prefix}mekasuit_helmet`
        },
        {
            output: Item.of('mekanism:mekasuit_bodyarmor', {
                mekData: { modules: { 'mekanism:color_modulation_unit': { amount: 1, color: -14276057, enabled: 1 } } }
            }),
            inputs: [
                'immersiveengineering:component_electronic',
                '#forge:fabrics/infused',
                '#forge:gems/infused_diamond',
                '#forge:fabrics/infused',
                'ars_elemental:glyph_bubble_shield',
                '#forge:fabrics/infused',
                '#forge:gems/infused_diamond',
                '#forge:fabrics/infused'
            ],
            reagents: ['minecraft:netherite_chestplate'],
            sourceCost: 0,
            id: `${id_prefix}mekasuit_bodyarmor`
        },
        {
            output: Item.of('mekanism:mekasuit_pants', {
                mekData: { modules: { 'mekanism:color_modulation_unit': { amount: 1, color: -14276057, enabled: 1 } } }
            }),
            inputs: [
                'immersiveengineering:component_electronic',
                '#forge:fabrics/infused',
                '#forge:gems/infused_diamond',
                '#forge:fabrics/infused',
                'ars_elemental:glyph_bubble_shield',
                '#forge:fabrics/infused',
                '#forge:gems/infused_diamond',
                '#forge:fabrics/infused'
            ],
            reagents: ['minecraft:netherite_leggings'],
            sourceCost: 0,
            id: `${id_prefix}mekasuit_pants`
        },
        {
            output: Item.of('mekanism:mekasuit_boots', {
                mekData: { modules: { 'mekanism:color_modulation_unit': { amount: 1, color: -14276057, enabled: 1 } } }
            }),
            inputs: [
                'immersiveengineering:component_electronic',
                '#forge:fabrics/infused',
                '#forge:gems/infused_diamond',
                '#forge:fabrics/infused',
                'ars_elemental:glyph_bubble_shield',
                '#forge:fabrics/infused',
                '#forge:gems/infused_diamond',
                '#forge:fabrics/infused'
            ],
            reagents: ['minecraft:netherite_boots'],
            sourceCost: 0,
            id: `${id_prefix}mekasuit_boots`
        },
        {
            output: 'mininggadgets:mininggadget_simple',
            inputs: [
                '#forge:gems/infused_diamond',
                '#forge:nuggets/silver',
                'powah:capacitor_niotic',
                '#forge:wooden_grip',
                'ars_nouveau:glyph_break',
                'immersiveengineering:component_electronic',
                'powah:capacitor_niotic',
                '#forge:nuggets/silver'
            ],
            reagents: ['ars_nouveau:wand'],
            sourceCost: 0,
            id: `${id_prefix}mininggadget_simple`
        },
        {
            output: 'mininggadgets:mininggadget_fancy',
            inputs: [
                '#forge:gems/infused_diamond',
                '#forge:nuggets/gold',
                'powah:capacitor_niotic',
                '#forge:wooden_grip',
                'ars_nouveau:glyph_break',
                'immersiveengineering:component_electronic',
                'powah:capacitor_niotic',
                '#forge:nuggets/gold'
            ],
            reagents: ['ars_nouveau:wand'],
            sourceCost: 0,
            id: `${id_prefix}mininggadget_fancy`
        },
        {
            output: 'mininggadgets:mininggadget',
            inputs: [
                '#forge:gems/infused_diamond',
                '#forge:nuggets/electrum',
                'powah:capacitor_niotic',
                '#forge:wooden_grip',
                'ars_nouveau:glyph_break',
                'immersiveengineering:component_electronic',
                'powah:capacitor_niotic',
                '#forge:nuggets/electrum'
            ],
            reagents: ['ars_nouveau:wand'],
            sourceCost: 0,
            id: `${id_prefix}mininggadget`
        },
        {
            output: 'mekanism:meka_tool',
            inputs: [
                '#forge:gems/infused_diamond',
                '#forge:rods/osmium',
                'powah:capacitor_spirited',
                '#pneumaticcraft:plastic_sheets',
                'ars_nouveau:glyph_break',
                'immersiveengineering:component_electronic',
                'powah:capacitor_spirited',
                '#forge:rods/osmium'
            ],
            reagents: ['immersiveengineering:drill'],
            sourceCost: 0,
            id: `${id_prefix}meka_tool`
        },
        {
            output: 'ars_nouveau:summon_focus',
            inputs: [
                'ars_elemental:mark_of_mastery',
                '#forge:wires/electrum',
                '#forge:wires/electrum',
                '#forge:wires/electrum',
                '#forge:wires/electrum'
            ],
            reagents: ['#forge:storage_blocks/source'],
            sourceCost: 10000,
            id: 'ars_nouveau:summon_focus'
        },
        {
            output: 'thermal:upgrade_augment_1',
            inputs: [
                'ae2:spatial_cell_component_2',
                '#forge:gears/compressed_iron',
                'immersiveengineering:component_electronic',
                '#forge:gears/compressed_iron',
                'ae2:spatial_cell_component_2',
                '#forge:gears/compressed_iron',
                'immersiveengineering:component_electronic',
                '#forge:gears/compressed_iron'
            ],
            reagents: ['#industrialforegoing:machine_frame/simple'],
            sourceCost: 1000,
            id: `${id_prefix}upgrade_augment_1`
        },
        {
            output: Item.of('thermal:upgrade_augment_2', '{AugmentData:{BaseMod:4,Type:"Upgrade"}}'),
            inputs: [
                'thermal:upgrade_augment_1',
                'ae2:spatial_cell_component_2',
                '#forge:gears/diamond',
                'pneumaticcraft:printed_circuit_board',
                '#forge:gears/diamond',
                'ae2:spatial_cell_component_2',
                '#forge:gears/diamond',
                'pneumaticcraft:printed_circuit_board',
                '#forge:gears/diamond'
            ],
            reagents: ['#industrialforegoing:machine_frame/advanced'],
            sourceCost: 5000,
            id: `${id_prefix}upgrade_augment_2`
        },
        {
            output: Item.of('thermal:upgrade_augment_3', '{AugmentData:{BaseMod:8,Type:"Upgrade"}}'),
            inputs: [
                'thermal:upgrade_augment_2',
                'ae2:spatial_cell_component_2',
                '#forge:gears/netherite',
                'pneumaticcraft:printed_circuit_board',
                '#forge:gears/netherite',
                'ae2:spatial_cell_component_2',
                '#forge:gears/netherite',
                'pneumaticcraft:printed_circuit_board',
                '#forge:gears/netherite'
            ],
            reagents: ['#industrialforegoing:machine_frame/supreme'],
            sourceCost: 10000,
            id: `${id_prefix}upgrade_augment_3`
        },
        {
            output: 'thermal:dynamo_disenchantment',
            inputs: [
                'immersiveengineering:coil_mv',
                '#forge:gems/source',
                'quark:rainbow_rune',
                'minecraft:lodestone',
                'powah:capacitor_niotic',
                'minecraft:lodestone',
                'quark:rainbow_rune',
                '#forge:gems/source'
            ],
            reagents: ['thermal:energy_cell_frame'],
            sourceCost: 10000,
            id: `${id_prefix}dynamo_disenchantment`
        },
        {
            output: 'ars_elemental:thread_summon',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:essences/conjuration',
                '#ars_nouveau:wilden_drop',
                'twilightforest:raven_feather',
                '#ars_nouveau:wilden_drop'
            ],
            reagents: ['ars_nouveau:blank_thread'],
            sourceCost: 0,
            id: `ars_elemental:thread_summon`
        },
        {
            output: Item.of(
                'immersiveengineering:revolver',
                '{perks:{cooldown:0.75d,luck:1.0d,noise:0.75d},upgrades:{}}'
            ),
            inputs: [
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                'naturesaura:calling_spirit',
                '#forge:storage_blocks/lapis',
                '#forge:storage_blocks/lapis',
                '#forge:storage_blocks/source',
                '#forge:storage_blocks/source'
            ],
            reagents: ['immersiveengineering:revolver'],
            sourceCost: 2000,
            id: `${id_prefix}revolver_tier_1`
        },
        {
            output: Item.of(
                'immersiveengineering:revolver',
                '{perks:{cooldown:0.5d,luck:2.0d,noise:0.5d},upgrades:{}}'
            ),
            inputs: [
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                'kubejs:spirit_of_devotion',
                '#forge:storage_blocks/lapis',
                '#forge:storage_blocks/lapis',
                '#forge:storage_blocks/source',
                '#forge:storage_blocks/source'
            ],
            reagents: ['immersiveengineering:revolver'],
            sourceCost: 5000,
            id: `${id_prefix}revolver_tier_2`
        },
        {
            output: 'ae2:quantum_link',
            inputs: [
                'thermal:signalum_glass',
                'ae2:fluix_pearl',
                'thermal:signalum_glass',
                'ae2:fluix_pearl',
                'thermal:signalum_glass',
                'ae2:fluix_pearl',
                'thermal:signalum_glass',
                'ae2:fluix_pearl'
            ],
            reagents: ['occultism:dimensional_matrix'],
            sourceCost: 10000,
            id: `${id_prefix}quantum_link`
        },
        {
            output: 'mekanism:metallurgic_infuser',
            inputs: [
                '#forge:gems/infused_diamond',
                '#forge:plates/obsidian',
                'ae2:quartz_glass',
                '#forge:plates/obsidian',
                '#forge:gems/infused_diamond',
                '#forge:plates/obsidian',
                'ae2:quartz_glass',
                '#forge:plates/obsidian'
            ],
            reagents: ['ars_nouveau:arcane_core'],
            sourceCost: 10000,
            id: `${id_prefix}metallurgic_infuser`
        },
        {
            output: 'functionalstorage:diamond_upgrade',
            inputs: [
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:repository',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:repository',
                '#forge:gems/diamond'
            ],
            reagents: ['functionalstorage:gold_upgrade'],
            sourceCost: 1000,
            id: `${id_prefix}diamond_upgrade`
        },
        {
            output: 'sophisticatedstorage:gold_to_diamond_tier_upgrade',
            inputs: [
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:repository',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:repository',
                '#forge:gems/diamond'
            ],
            reagents: ['sophisticatedstorage:upgrade_base'],
            sourceCost: 1000,
            id: `${id_prefix}gold_to_diamond_tier_upgrade`
        },
        {
            output: 'sophisticatedstorage:stack_upgrade_tier_4',
            inputs: [
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:repository',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:repository',
                '#forge:gems/diamond'
            ],
            reagents: ['sophisticatedstorage:stack_upgrade_tier_3'],
            sourceCost: 1000,
            id: `${id_prefix}stack_upgrade_tier_4`
        },
        {
            output: 'mekanism:upgrade_anchor',
            inputs: ['#forge:essences/abjuration', 'ars_nouveau:glyph_aoe'],
            reagents: ['powah:blank_card'],
            sourceCost: 1000,
            id: `${id_prefix}upgrade_anchor`
        },
        {
            output: '4x starbunclemania:star_balloon',
            inputs: ['#forge:essences/air', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber'],
            reagents: ['immersiveengineering:balloon'],
            sourceCost: 0,
            id: 'starbunclemania:star_balloon'
        },
        {
            output: 'ae2:condenser',
            inputs: [
                'ae2:fluix_pearl',
                'naturesaura:infused_brick',
                'ae2:formation_core',
                'naturesaura:infused_brick',
                'ae2:fluix_pearl',
                'naturesaura:infused_brick',
                'ae2:annihilation_core',
                'naturesaura:infused_brick'
            ],
            reagents: ['occultism:wormhole_frame'],
            sourceCost: 0,
            id: `${id_prefix}condenser`
        },
        {
            output: 'mekanism:laser',
            inputs: [
                '#industrialforegoing:laser_lens/red',
                'powah:capacitor_spirited',
                'quark:rainbow_rune',
                'powah:capacitor_spirited',
                '#industrialforegoing:machine_frame/advanced',
                'powah:capacitor_spirited',
                'quark:rainbow_rune',
                'powah:capacitor_spirited'
            ],
            reagents: ['ars_nouveau:spell_turret'],
            sourceCost: 10000,
            id: `${id_prefix}laser`
        },
        {
            output: 'mekanism:supercharged_coil',
            inputs: [
                'ars_elemental:arc_prism_lens',
                'powah:capacitor_nitro',
                'quark:rainbow_rune',
                'powah:capacitor_nitro',
                '#industrialforegoing:machine_frame/supreme',
                'powah:capacitor_nitro',
                'quark:rainbow_rune',
                'powah:capacitor_nitro'
            ],
            reagents: ['mekanism:laser'],
            sourceCost: 10000,
            id: `${id_prefix}supercharged_coil`
        },
        {
            output: '2x minecraft:enchanted_book',
            inputs: [
                'occultism:book_of_binding_bound_foliot',
                'supplementaries:antique_ink',
                'minecraft:echo_shard',
                'quark:rainbow_rune',
                'quark:rainbow_rune',
                'quark:rainbow_rune',
                'quark:rainbow_rune',
                'quark:rainbow_rune'
            ],
            reagents: ['minecraft:enchanted_book'],
            sourceCost: 10000,
            keepNbtOfReagent: true,
            id: `${id_prefix}enchanted_book_clone`
        },
        {
            output: 'emendatusenigmatica:diamond_gear',
            inputs: [
                '#forge:essences/abjuration',
                '#mekanism:enriched/diamond',
                '#mekanism:enriched/diamond',
                '#mekanism:enriched/diamond',
                '#mekanism:enriched/diamond'
            ],
            reagents: ['#forge:gears/electrum'],
            sourceCost: 1000,
            id: `${id_prefix}diamond_gear`
        },
        {
            output: 'minecraft:heart_of_the_sea',
            inputs: [
                'ars_elemental:water_focus',
                'kubejs:shard_of_enduring',
                'kubejs:shard_of_enduring',
                'kubejs:shard_of_enduring',
                'kubejs:shard_of_enduring',
                'kubejs:shard_of_enduring',
                Item.of(
                    'pneumaticcraft:spawner_core',
                    '{"pneumaticcraft:SpawnerCoreStats":{"thermal:blizz":100}}'
                ).weakNBT(),
                'kubejs:shard_of_enduring',
                'kubejs:shard_of_enduring',
                'kubejs:shard_of_enduring',
                'kubejs:shard_of_enduring',
                'kubejs:shard_of_enduring'
            ],
            reagents: ['kubejs:primed_aetheric_heart'],
            sourceCost: 1000,
            id: `${id_prefix}heart_of_the_sea`
        },
        {
            output: 'kubejs:heart_of_the_mountain',
            inputs: [
                'ars_elemental:earth_focus',
                'kubejs:shard_of_renewal',
                'kubejs:shard_of_renewal',
                'kubejs:shard_of_renewal',
                'kubejs:shard_of_renewal',
                'kubejs:shard_of_renewal',
                Item.of(
                    'pneumaticcraft:spawner_core',
                    '{"pneumaticcraft:SpawnerCoreStats":{"thermal:basalz":100}}'
                ).weakNBT(),
                'kubejs:shard_of_renewal',
                'kubejs:shard_of_renewal',
                'kubejs:shard_of_renewal',
                'kubejs:shard_of_renewal',
                'kubejs:shard_of_renewal'
            ],
            reagents: ['kubejs:primed_aetheric_heart'],
            sourceCost: 1000,
            id: `${id_prefix}heart_of_the_mountain`
        },
        {
            output: 'kubejs:heart_of_the_inferno',
            inputs: [
                'ars_elemental:fire_focus',
                'kubejs:shard_of_rebirth',
                'kubejs:shard_of_rebirth',
                'kubejs:shard_of_rebirth',
                'kubejs:shard_of_rebirth',
                'kubejs:shard_of_rebirth',
                Item.of(
                    'pneumaticcraft:spawner_core',
                    '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:blaze":100}}'
                ).weakNBT(),
                'kubejs:shard_of_rebirth',
                'kubejs:shard_of_rebirth',
                'kubejs:shard_of_rebirth',
                'kubejs:shard_of_rebirth',
                'kubejs:shard_of_rebirth'
            ],
            reagents: ['kubejs:primed_aetheric_heart'],
            sourceCost: 1000,
            id: `${id_prefix}heart_of_the_inferno`
        },
        {
            output: 'kubejs:heart_of_the_tempest',
            inputs: [
                'ars_elemental:air_focus',
                'kubejs:shard_of_wisdom',
                'kubejs:shard_of_wisdom',
                'kubejs:shard_of_wisdom',
                'kubejs:shard_of_wisdom',
                'kubejs:shard_of_wisdom',
                Item.of(
                    'pneumaticcraft:spawner_core',
                    '{"pneumaticcraft:SpawnerCoreStats":{"thermal:blitz":100}}'
                ).weakNBT(),
                'kubejs:shard_of_wisdom',
                'kubejs:shard_of_wisdom',
                'kubejs:shard_of_wisdom',
                'kubejs:shard_of_wisdom',
                'kubejs:shard_of_wisdom'
            ],
            reagents: ['kubejs:primed_aetheric_heart'],
            sourceCost: 1000,
            id: `${id_prefix}heart_of_the_tempest`
        },
        {
            output: 'pneumaticcraft:spawner_core_shell',
            inputs: [
                'spirit:soul_glass',
                '#forge:gems/nitro',
                'spirit:soul_glass',
                '#forge:gems/nitro',
                'spirit:soul_glass',
                '#forge:gems/nitro',
                'spirit:soul_glass',
                '#forge:gems/nitro'
            ],
            reagents: ['spirit:soul_crystal'],
            sourceCost: 1000,
            id: `${id_prefix}spawner_core_shell`
        },
        {
            output: 'superiorshields:enchanter_shield',
            inputs: [
                'ars_elemental:glyph_bubble_shield',
                '#forge:ingots/energized_steel',
                '#forge:gems/source',
                '#forge:ingots/energized_steel',
                'ars_nouveau:glyph_self',
                '#forge:ingots/energized_steel',
                '#forge:gems/source',
                '#forge:ingots/energized_steel'
            ],
            reagents: [
                'superiorshields:knightmetal_shield',
                'superiorshields:steeleaf_shield',
                'superiorshields:ironwood_shield',
                'superiorshields:constantan_shield',
                'superiorshields:electrum_shield',
                'superiorshields:bronze_shield'
            ],
            sourceCost: 1000,
            keepNbtOfReagent: true,
            id: `${id_prefix}enchanter_shield`
        },
        {
            output: 'apotheosis:sigil_of_socketing',
            inputs: [
                'apotheosis:gem_dust',
                '#forge:ingots/energized_steel',
                'apotheosis:gem_dust',
                'apotheosis:gem_dust',
                'apotheosis:gem_dust',
                '#forge:ingots/energized_steel',
                'apotheosis:gem_dust',
                'apotheosis:gem_dust'
            ],
            reagents: ['occultism:otherstone_tablet'],
            sourceCost: 10000,
            id: `${id_prefix}sigil_of_socketing`
        },
        {
            output: 'powah:lens_of_ender',
            inputs: [
                '#industrialforegoing:laser_lens/purple',
                '#forge:pellets/polonium',
                '#forge:pellets/polonium',
                '#forge:pellets/polonium',
                '#forge:essences/conjuration',
                '#forge:pellets/polonium',
                '#forge:pellets/polonium',
                '#forge:pellets/polonium'
            ],
            reagents: [
                Item.of('ars_nouveau:mob_jar', {
                    BlockEntityTag: {
                        entityTag: { id: 'minecraft:ender_dragon' },
                        id: 'ars_nouveau:mob_jar'
                    },
                    entityId: 'minecraft:ender_dragon'
                }).weakNBT()
            ],
            sourceCost: 10000,
            id: `${id_prefix}lens_of_ender`
        },
        {
            output: 'simplytools:diamond_hammer',
            inputs: [
                '#forge:essences/abjuration',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond'
            ],
            reagents: ['simplytools:golden_hammer'],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}diamond_hammer`
        },
        {
            output: 'simplytools:diamond_excavator',
            inputs: [
                '#forge:essences/abjuration',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond'
            ],
            reagents: ['simplytools:golden_excavator'],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}diamond_excavator`
        }
    ];

    const gem_types = [{ mod: 'minecraft', material: 'diamond', essence: 'abjuration' }];

    const equipment_types = [
        { slot: 'helmet', count: 5 },
        { slot: 'chestplate', count: 8 },
        { slot: 'leggings', count: 7 },
        { slot: 'boots', count: 4 },
        { slot: 'sword', count: 2 },
        { slot: 'pickaxe', count: 3 },
        { slot: 'axe', count: 3 },
        { slot: 'shovel', count: 1 },
        { slot: 'hoe', count: 2 }
    ];

    gem_types.forEach((gem_type) => {
        equipment_types.forEach((equipment_type) => {
            let inputs = [`#forge:essences/${gem_type.essence}`];

            for (let i = 0; i < equipment_type.count; i++) {
                inputs.push(`#forge:gems/${gem_type.material}`);
            }

            recipes.push({
                output: `${gem_type.mod}:${gem_type.material}_${equipment_type.slot}`,
                inputs: inputs,
                reagents: [`minecraft:golden_${equipment_type.slot}`],
                keepNbtOfReagent: true,
                sourceCost: 0,
                id: `${id_prefix}${gem_type.material}_${equipment_type.slot}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        recipe.output = Item.of(recipe.output).toJson();
        recipe.pedestalItems = recipe.inputs.map((input) => ({ item: Ingredient.of(input).toJson() }));
        recipe.reagent = recipe.reagents.map((reagent) => Ingredient.of(reagent).toJson());

        event.custom(recipe).id(recipe.id);
    });
});
