Ponder.registry((event) => {
    event.create(['botania:alfheim_portal', 'botania:natura_pylon']).scene("alfheim_portal", "Портал в Эльфхейм", "kubejs:alfheim_portal", (scene, util) => {
		scene.showBasePlate();
		scene.idle(10);
		fadeInSection(scene, [4, 1, 3], [0, 0, 1], Direction.UP, 10);
		scene.text(45, "Это-§2Ядро §2эльфийских §2врат", [4, 1.5, 4])
			.placeNearTarget();
		scene.idle(55);
		scene.text(45, "Возведите вокруг него рамку 3 на 3 из жизнедерева", [2, 1.5, 4.5])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([3,1,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([5,1,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([2,2,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([6,2,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([2,3,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([6,3,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([2,4,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([6,4,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([3,5,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([4,5,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([5,5,4], Direction.up);
		scene.idle(20);
		scene.text(45, "По центрам каждой из сторон должно быть §2Светящееся §2жизнедерево", [2, 3.5, 4])
			.placeNearTarget()
			.attachKeyFrame();
		scene.idle(55);
		scene.text(45, "Рядом с порталом расположите 2 наполненных бассейна маны...", [1, 1.5, 3])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([1,1,3], Direction.up);
		scene.idle(3);
		scene.world.showSection([7,1,3], Direction.up);
		scene.idle(45);
		scene.text(45, "А сверху на них-2 §2Природных §2пилона", [1, 2.5, 3])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([1,2,3], Direction.up);
		scene.idle(3);
		scene.world.showSection([7,2,3], Direction.up);
	    scene.idle(45);
		scene.world.showSection([4,1,4], Direction.up);
		scene.idle(3);
		scene.world.replaceBlocks([4, 1, 3], "air", false);
	    scene.idle(5);
		scene.text(25, "Та-да! §2Портал §2в §2Эльфхейм§r полностью запущен", [2, 1.5, 4.5])
			.independent();
	    scene.idle(25);
    });
});

