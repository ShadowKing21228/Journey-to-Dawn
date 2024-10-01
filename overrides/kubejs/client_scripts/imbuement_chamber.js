Ponder.registry((event) => {
    event.create(['ars_nouveau:imbuement_chamber']).scene("imbuement_chamber", "Камера впитывания", "kubejs:imbuement_chamber", (scene, util) => {
		scene.showBasePlate();
		scene.idle(10);
		scene.world.showSection([2,1,2], Direction.up);
		scene.text(45, "Это Камера впитывания. Она способна накапливать и отдавать Исток", [2, 1.5, 2])
			.placeNearTarget();
		scene.idle(50);
		scene.text(45, "Для некоторых рецептов могут требоваться предметы, которые нужно класть на Аркановые пьедесталы", [1, 1.5, 1])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([1,1,1], Direction.up);
		scene.idle(3);
		scene.world.showSection([1,1,3], Direction.up);
		scene.idle(3);
		scene.world.showSection([3,1,1], Direction.up);
		scene.idle(3);
		scene.world.showSection([3,1,3], Direction.up);
		scene.idle(35);
		scene.text(45, "Так же можно использовать Аркановые платформы", [2, 1.5, 1])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([2,1,1], Direction.up);
		scene.idle(3);
		scene.world.showSection([1,1,2], Direction.up);
		scene.idle(3);
		scene.world.showSection([3,1,2], Direction.up);
		scene.idle(3);
		scene.world.showSection([2,1,3], Direction.up);
	    scene.idle(35);
		addText(scene, 30, 'Помните, что они должны располагаться не дальше 1 блока от камеры!', PonderPalette.RED, [2.0, 1.5, 1.0]);
		scene.text(55, "Вы так же можете добавить кувшины с Истоком для ускорения процесса", [0, 1.5, 0])
			.placeNearTarget();
		scene.idle(10);
		fadeInSection(scene, [0, 1, 0], [0, 0, 0], Direction.UP, 10);
		fadeInSection(scene, [4, 1, 0], [0, 0, 0], Direction.UP, 10);
		fadeInSection(scene, [0, 1, 4], [0, 0, 0], Direction.UP, 10);
		fadeInSection(scene, [4, 1, 4], [0, 0, 0], Direction.UP, 15);
		scene.world.replaceBlocks([0, 1, 0], "air", true);
		scene.world.replaceBlocks([0, 1, 4], "air", true);
		scene.world.replaceBlocks([4, 1, 0], "air", true);
		scene.world.replaceBlocks([4, 1, 4], "air", true);
	    scene.idle(20);
    });
});

