Ponder.registry((event) => {
	event.create('jumbofurnace:jumbo_furnace').scene('jumbo_furnace', 'Несуразная печь', 'kubejs:jumbo_furnace', (scene, util) => {
		let size = structureSize(5, 5, 5);
        showBasePlate(scene, size.width, size.depth);
		buildUpSlice(scene, size.width, size.depth, 1, 1, 3);
		buildUpSlice(scene, size.width, size.depth, 2, 2, 3);
		buildUpSlice(scene, size.width, size.depth, 3, 3, 3);
		scene.idle(5);
		addText(scene, 60, 'Расставьте печи кубом 3 на 3 на 3', PonderPalette.WHITE, [3.0, 2.0, 2.0]);
		
		replaceBlocks(scene, "quark:deepslate_furnace", [1, 2, 1]);
		replaceBlocks(scene, "quark:blackstone_furnace", [2, 2, 1]);
		replaceBlocks(scene, "minecraft:blast_furnace", [2, 3, 1]);
		replaceBlocks(scene, "minecraft:smoker", [3, 1, 1]);
		replaceBlocks(scene, "minecraft:smoker", [1, 1, 2]);
		replaceBlocks(scene, "minecraft:blast_furnace", [3, 3, 3]);
		scene.idle(20);
		addText(scene, 60, 'При постройке нельзя использовать печи других видов', PonderPalette.RED, [1.0, 3.0, 1.0]);
		
		replaceBlocks(scene, "minecraft:furnace", [1, 2, 1]);
		replaceBlocks(scene, "minecraft:furnace", [2, 2, 1]);
		replaceBlocks(scene, "minecraft:furnace", [2, 3, 1]);
		replaceBlocks(scene, "minecraft:furnace", [3, 1, 1]);
		replaceBlocks(scene, "minecraft:furnace", [1, 1, 2]);
		replaceBlocks(scene, "minecraft:furnace", [3, 3, 3]);
		scene.world.modifyBlock([1, 2, 1], (curState) => curState.with("facing", "west"), true);
		scene.idle(20);
		addText(scene, 60, 'Однако можно ставить их в разных направлениях', PonderPalette.WHITE, [1.0, 3.0, 1.0]);
		
		replaceBlocks(scene, "jumbofurnace:jumbo_furnace", [1, 1, 1], [3, 1, 3]);
		replaceBlocks(scene, "quark:sturdy_stone", [1, 2, 1]);
		replaceBlocks(scene, "quark:sturdy_stone", [1, 2, 3]);
		replaceBlocks(scene, "quark:sturdy_stone", [3, 2, 1]);
		replaceBlocks(scene, "quark:sturdy_stone", [3, 2, 3]);
		scene.world.modifyBlock([2, 2, 1], (curState) => curState.with("facing", "north"), true);
		scene.world.modifyBlock([1, 2, 2], (curState) => curState.with("facing", "west"), true);
		scene.world.modifyBlock([2, 2, 3], (curState) => curState.with("facing", "south"), true);
		scene.world.modifyBlock([3, 2, 2], (curState) => curState.with("facing", "east"), true);
		replaceBlocks(scene, "jumbofurnace:jumbo_furnace", [1, 3, 1], [3, 3, 3]);
		scene.world.modifyBlock([1, 3, 1], (curState) => curState.with("y", "2"), true);
		scene.world.modifyBlock([1, 3, 2], (curState) => curState.with("y", "2"), true);
		scene.world.modifyBlock([1, 3, 3], (curState) => curState.with("y", "2"), true);
		scene.world.modifyBlock([2, 3, 1], (curState) => curState.with("y", "2"), true);
		scene.world.modifyBlock([2, 3, 2], (curState) => curState.with("y", "2"), true);
		scene.world.modifyBlock([2, 3, 3], (curState) => curState.with("y", "2"), true);
		scene.world.modifyBlock([3, 3, 1], (curState) => curState.with("y", "2"), true);
		scene.world.modifyBlock([3, 3, 2], (curState) => curState.with("y", "2"), true);
		scene.world.modifyBlock([3, 3, 3], (curState) => curState.with("y", "2"), true);
		scene.idle(20);
		addText(scene, 40, 'Та-да! Несуразная печь полностью сформирована', PonderPalette.WHITE, [3.0, 2.0, 2.0]);
    });
});


