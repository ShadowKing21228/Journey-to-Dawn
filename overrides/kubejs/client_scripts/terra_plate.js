Ponder.registry((event) => {
    event.create(['botania:terra_plate']).scene("terra_plate", "Аггломерационная плита", "kubejs:terra_plate", (scene, util) => {
		scene.showBasePlate();
		scene.idle(10);
		scene.text(45, "Начните с установки лазуритовых блоков по сторонам", [2, 1.5, 2.5])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([2,1,1], Direction.up);
		scene.idle(3);
		scene.world.showSection([1,1,2], Direction.up);
		scene.idle(3);
		scene.world.showSection([3,1,2], Direction.up);
		scene.idle(3);
		scene.world.showSection([2,1,3], Direction.up);
		scene.idle(30);
		scene.text(45, "Потом заполните свободное пространство жизнекамнем", [2, 1.5, 2.5])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([1,1,1], Direction.up);
		scene.idle(3);
		scene.world.showSection([2,1,2], Direction.up);
		scene.idle(3);
		scene.world.showSection([3,1,1], Direction.up);
		scene.idle(3);
		scene.world.showSection([1,1,3], Direction.up);
		scene.idle(3);
		scene.world.showSection([3,1,3], Direction.up);
	    scene.idle(30);
		scene.text(35, "Сама аггломерационная плита устанавливается в центре сверху", [2, 1.5, 2.5])
			.placeNearTarget();
		scene.world.showSection([2,2,2], Direction.up);
	    scene.idle(45);
		scene.text(25, "Та-да! Аггломерационная структура построена", [2, 1.5, 2.5])
			.placeNearTarget();
	    scene.idle(25);
    });
});

