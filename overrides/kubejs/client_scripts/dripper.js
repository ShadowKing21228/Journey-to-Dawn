Ponder.registry((event) => {
    event.create('ftbdripper:dripper').scene("dripper", "Капельница", "kubejs:dripper", (scene, util) => {
		scene.world.showSection([0,0,0,  4,0,4], Direction.up);
		scene.world.showSection([2,2,2], Direction.up);
		scene.idle(25);
		scene.text(45, "Это капельница", [2, 3, 2])
			.placeNearTarget();
		scene.idle(55);
		scene.text(45, "Поставьте под него блок для обработки...", [2, 3, 2])
			.placeNearTarget();
		scene.idle(55);
		scene.world.showSection([2,1,2], Direction.up);
		scene.idle(20);
		scene.text(45, "...залейте в него нужную жидкость...", [2, 3, 2])
			.placeNearTarget()
			.attachKeyFrame();
		scene.idle(55);
		scene.showControls(30, [2, 1.5, 2], "right")
			.rightClick()
			.withItem("ftbdripper:water_bowl");
		scene.idle(25)
		scene.text(45, "...и подождите", [2, 2.5, 2])
			.placeNearTarget();
		scene.idle(80);
		scene.world.replaceBlocks([2, 1, 2], "cobblestone", false);
	    scene.idle(5);
		scene.text(25, "Та-да! Капельница изменила блок", [2, 3, 2])
			.independent();
	    scene.idle(25);
    });
});

