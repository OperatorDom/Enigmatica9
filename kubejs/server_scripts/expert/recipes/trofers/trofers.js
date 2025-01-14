ServerEvents.highPriorityData((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'trofers:trofers/';
    const recipes = [
        {
            colors: { accent: '#3dcc61', base: '#606060' },
            display: { scale: 0.625 },
            item: { item: 'kubejs:tree_of_life_1' },
            name: {
                color: '#3dcc61',
                translate: 'trophy.trofers.composed',
                with: [{ translate: 'item.kubejs.tree_of_life_1' }]
            },
            effects: {
                rewards: {
                    lootTable: 'enigmatica:loot_boxes/aura_leaves/tiny',
                    cooldown: 6000
                }
            },
            id: 'tree_of_life_1'
        },
        {
            colors: { accent: '#3dcc61', base: '#606060' },
            display: { scale: 0.75 },
            item: { item: 'kubejs:tree_of_life_2' },
            name: {
                color: '#3dcc61',
                translate: 'trophy.trofers.composed',
                with: [{ translate: 'item.kubejs.tree_of_life_2' }]
            },
            effects: {
                rewards: {
                    lootTable: 'enigmatica:loot_boxes/aura_leaves/small',
                    cooldown: 6000
                }
            },
            id: 'tree_of_life_2'
        },
        {
            colors: { accent: '#3dcc61', base: '#606060' },
            display: { scale: 0.875 },
            item: { item: 'kubejs:tree_of_life_3' },
            name: {
                color: '#3dcc61',
                translate: 'trophy.trofers.composed',
                with: [{ translate: 'item.kubejs.tree_of_life_3' }]
            },
            effects: {
                rewards: {
                    lootTable: 'enigmatica:loot_boxes/aura_leaves/medium',
                    cooldown: 6000
                }
            },
            id: 'tree_of_life_3'
        },
        {
            colors: { accent: '#3dcc61', base: '#606060' },
            display: { scale: 1.0 },
            item: { item: 'kubejs:tree_of_life_4' },
            name: {
                color: '#3dcc61',
                translate: 'trophy.trofers.composed',
                with: [{ translate: 'item.kubejs.tree_of_life_4' }]
            },
            effects: {
                rewards: {
                    lootTable: 'enigmatica:loot_boxes/aura_leaves/large',
                    cooldown: 6000
                }
            },
            id: 'tree_of_life_4'
        },
        {
            colors: { accent: '#e0d022', base: '#606060' },
            display: { offset: { y: 2.0 }, scale: 1.0 },
            item: { item: 'kubejs:mastery_token_air' },
            name: {
                color: '#e0d022',
                translate: 'trophy.trofers.composed',
                with: [{ translate: 'item.kubejs.mastery_token_air' }]
            },
            animation: { type: 'spinning', speed: 0.3 },
            id: 'mastery_token_air'
        },
        {
            colors: { accent: '#2d69e1', base: '#606060' },
            display: { offset: { y: 2.0 }, scale: 1.0 },
            item: { item: 'kubejs:mastery_token_water' },
            name: {
                color: '#2d69e1',
                translate: 'trophy.trofers.composed',
                with: [{ translate: 'item.kubejs.mastery_token_water' }]
            },
            animation: { type: 'spinning', speed: 0.3 },
            id: 'mastery_token_water'
        },
        {
            colors: { accent: '#bd4f00', base: '#606060' },
            display: { offset: { y: 2.0 }, scale: 1.0 },
            item: { item: 'kubejs:mastery_token_fire' },
            name: {
                color: '#bd4f00',
                translate: 'trophy.trofers.composed',
                with: [{ translate: 'item.kubejs.mastery_token_fire' }]
            },
            animation: { type: 'spinning', speed: 0.3 },
            id: 'mastery_token_fire'
        },
        {
            colors: { accent: '#016b5d', base: '#606060' },
            display: { offset: { y: 2.0 }, scale: 1.0 },
            item: { item: 'kubejs:mastery_token_earth' },
            name: {
                color: '#016b5d',
                translate: 'trophy.trofers.composed',
                with: [{ translate: 'item.kubejs.mastery_token_earth' }]
            },
            animation: { type: 'spinning', speed: 0.3 },
            id: 'mastery_token_earth'
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.id}.json`, recipe);
    });
});
