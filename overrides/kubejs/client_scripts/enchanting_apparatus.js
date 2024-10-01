Ponder.registry((event) => {
    event.create(['ars_nouveau:enchanting_apparatus']).scene("enchanting_apparatus", "Чародейский аппарат", "kubejs:enchanting_apparatus", (scene, util) => {
		scene.showBasePlate();
		scene.idle(10);
		scene.world.showSection([4,2,4], Direction.up);
		scene.text(45, "Это Чародейский аппарат. Он способен создавать предметы, используя Исток", [4, 2.5, 4])
			.placeNearTarget();
		scene.idle(55);
		scene.world.showSection([4,1,4], Direction.up);
		scene.text(45, "Для его работы под ним обязательно должно быть Аркановое ядро", [4, 1.5, 4])
			.placeNearTarget();
		scene.idle(55);
		scene.text(45, "Предметы, что используются в крафтах, нужно класть на Аркановые пьедесталы и платформы", [3, 1.5, 3])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([3,1,3], Direction.up);
		scene.idle(3);
		scene.world.showSection([5,1,3], Direction.up);
		scene.idle(3);
		scene.world.showSection([3,1,5], Direction.up);
		scene.idle(3);
		scene.world.showSection([5,1,5], Direction.up);
		scene.idle(30);
		scene.text(45, "Они могут располагаться на расстоянии в один...", [3, 1.5, 3])
			.placeNearTarget();
		scene.idle(55);
		scene.world.showSection([2,1,2], Direction.up);
		scene.idle(3);
		scene.text(25, "...два...", [2, 1.5, 2])
			.placeNearTarget();
		scene.world.showSection([6,1,2], Direction.up);
		scene.idle(3);
		scene.world.showSection([2,1,6], Direction.up);
		scene.idle(3);
		scene.world.showSection([6,1,6], Direction.up);
		scene.idle(35);
		scene.world.showSection([4,1,1], Direction.up);
		scene.idle(3);
		scene.text(45, "...или же три блока от самого аппарата", [4, 1.5, 1])
			.placeNearTarget();
		scene.world.showSection([1,1,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([7,1,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([4,1,7], Direction.up);
		scene.idle(55);
		scene.text(55, "Вы так же должны добавить кувшины с Истоком", [1, 1.5, 1])
			.placeNearTarget();
		scene.idle(5);
		scene.world.showSection([1,1,1], Direction.up);
		scene.idle(3);
		scene.world.showSection([7,1,1], Direction.up);
		scene.idle(3);
		scene.world.showSection([1,1,7], Direction.up);
		scene.idle(3);
		scene.world.showSection([7 ,1,7], Direction.up);
	    scene.idle(45);
    });
});

