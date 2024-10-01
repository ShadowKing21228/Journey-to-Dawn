Ponder.registry((event) => {
    event.create(['dimdungeons:block_key_charger', 'dimdungeons:block_key_charger_used', 'dimdungeons:block_key_charger_damaged']).scene("key_charger", "Высекатель ключей", "kubejs:key_charger", (scene, util) => {
		let size = structureSize(5, 5, 5);
        showBasePlate(scene, size.width, size.depth);
		buildUpSlice(scene, size.width, size.depth, 1, 1, 3);
		scene.idle(10);
	    scene.text(45, "Это- §eВысекатель ключей.§r Он преобразует пустые ключи в настроенные", [2, 1.5, 2.5])
			.placeNearTarget()
			.attachKeyFrame();
	    scene.idle(55);
		scene.text(50, "Нажмите ПКМ по нему, используя пустой ключ портала", [2.0, 2, 1.5])
			.placeNearTarget()
			.attachKeyFrame();
		scene.idle(10);
        scene.showControls(40, [2.5, 2.2, 1], "right")
        	.rightClick()
           	.withItem("dimdungeons:item_portal_key");
        scene.idle(55);
		scene.particles.simple(20, "electric_spark", [2, 2, 2]).density(16).scale(1.4).withinBlockSpace();
		scene.idle(20);
		scene.world.createItemEntity(util.vector.topOf(util.grid.at(2, 2, 2)).add(0, 0.5, 0), util.vector.of(-0.07, 0.4, -0.07), "dimdungeons:item_portal_key");
		scene.text(30, "Будьте внимательны, высекатель имеет 30% шанс повредиться", [2, 1.5, 2.5]);
		replaceBlocks(scene, "dimdungeons:block_key_charger_used", [2, 2, 2]);
        scene.idle(20);
		replaceBlocks(scene, "dimdungeons:block_key_charger_damaged", [2, 2, 2]);
        scene.idle(20);
    });
});

