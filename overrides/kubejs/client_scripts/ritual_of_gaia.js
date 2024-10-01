Ponder.registry((event) => {
    event.create(['botania:gaia_pylon', 'minecraft:beacon']).scene("ritual_of_gaia", "Ритуал вызова Гайи", "kubejs:ritual_of_gaia", (scene, util) => {
		scene.scaleSceneView(0.85);
		scene.showBasePlate();
		scene.world.showSection([1,1,1], Direction.up);
		scene.world.showSection([2,1,9], Direction.up);
		scene.world.showSection([4,1,10], Direction.up);
		scene.world.showSection([7,1,3], Direction.up);
		scene.world.showSection([8,1,3], Direction.up);
		scene.world.showSection([11,1,0], Direction.up);
		scene.world.showSection([10,1,6], Direction.up);
		scene.world.showSection([11,1,11], Direction.up);
		scene.idle(10);
		scene.text(45, "Сначала, очистите территорию от любых блоков", [0, 1.5, 5])
			.independent();
		scene.idle(30);
		scene.world.replaceBlocks([1,1,1], "air", true);
		scene.world.replaceBlocks([2,1,9], "air", true);
		scene.world.replaceBlocks([4,1,10], "air", true);
		scene.world.replaceBlocks([7,1,3], "air", true);
		scene.world.replaceBlocks([8,1,3], "air", true);
		scene.world.replaceBlocks([11,1,0], "air", true);
		scene.world.replaceBlocks([10,1,6], "air", true);
		scene.world.replaceBlocks([11,1,11], "air", true);
		scene.idle(30);
		scene.text(45, "Далее, постойте маяк. Достаточно даже первого уровня", [5, 1.5, 5])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([5,1,5], Direction.up);
		scene.idle(1);
		scene.world.showSection([6,1,5], Direction.up);
		scene.idle(1);
		scene.world.showSection([5,1,6], Direction.up);
		scene.idle(1);
		scene.world.showSection([7,1,5], Direction.up);
		scene.idle(1);
		scene.world.showSection([6,1,6], Direction.up);
		scene.idle(1);
		scene.world.showSection([5,1,7], Direction.up);
		scene.idle(1);
		scene.world.showSection([7,1,6], Direction.up);
		scene.idle(2);
		scene.world.showSection([6,1,7], Direction.up);
		scene.idle(2);
		scene.world.showSection([7,1,7], Direction.up);
		scene.idle(3);
		scene.world.showSection([6,2,6], Direction.up);
		scene.idle(35);
		scene.text(45, "И последний шаг-установить пилоны Гайи, на 3 блока вбок и 1 ввысь от маяка", [2, 3.5, 2])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([2,3,2], Direction.up);
		scene.idle(3);
		scene.world.showSection([10,3,2], Direction.up);
		scene.idle(3);
		scene.world.showSection([2,3,10], Direction.up);
		scene.idle(3);
		scene.world.showSection([10,3,10], Direction.up);
	    scene.idle(35);
		scene.text(40, "Та-да! Структура для призыва Гайи полностью готова", [0, 1.5, 5])
			.independent();
		scene.idle(50);
    });
});

