Ponder.registry((event) => {
  	event.create("forbidden_arcanus:hephaestus_forge").scene( "hephaestus", "Постройка кузницы Гефеста", "kubejs:hephaestus_forge", (scene, util) =>{
		scene.showStructure();
		scene.idle(20)
		scene.text(55, "§9Кузница Гефеста §rэто мультиблок 9 на 9", [0, 1.5, 5])
			.independent();
		scene.idle(45)
		scene.world.hideSection([0,1,0,  10,4,10], Direction.down)
		scene.idle(10)
		scene.text(55, "Следуйте этому гайду, если хотите построить его", [0, 1.5, 5])
			.independent()
			.attachKeyFrame();
		scene.idle(25);
		scene.world.setBlock([5,0,5], "supplementaries:blackstone_lamp", false);
		scene.idle(5);
		scene.world.setBlock([5,0,2], "supplementaries:blackstone_lamp", false);
		scene.idle(4);
		scene.world.setBlock([3,0,3], "supplementaries:blackstone_lamp", false);
		scene.idle(4);
		scene.world.setBlock([2,0,5], "supplementaries:blackstone_lamp", false);
		scene.idle(4);
		scene.world.setBlock([3,0,7], "supplementaries:blackstone_lamp", false);
		scene.idle(4);
		scene.world.setBlock([5,0,8], "supplementaries:blackstone_lamp", false);
		scene.idle(4);
		scene.world.setBlock([7,0,7], "supplementaries:blackstone_lamp", false);
		scene.idle(3);
		scene.world.setBlock([8,0,5], "supplementaries:blackstone_lamp", false);
		scene.idle(3);
		scene.world.setBlock([7,0,3], "supplementaries:blackstone_lamp", false);
		scene.idle(7);
		scene.text(55, "Начните с размещения блоков §9Мистического §9резного §9полированного §9тёмного §9камня §rв указанные места", [5, 1.5, 5])
			.placeNearTarget();
		scene.idle(20)
		scene.world.showSection([5,1,5], Direction.down);
		scene.world.showSection([5,1,2], Direction.down);
		scene.world.showSection([3,1,3], Direction.down);
		scene.world.showSection([2,1,5], Direction.down);
		scene.world.showSection([3,1,7], Direction.down);
		scene.world.showSection([5,1,8], Direction.down);
		scene.world.showSection([7,1,7], Direction.down);
		scene.world.showSection([8,1,5], Direction.down);
		scene.world.showSection([7,1,3], Direction.down);
		scene.idle(45);
		scene.text(55, "Затем, поставьте 4 блока §9Резного §9мистического §9полированного §9тёмного §9камня §rвокруг центрального блока", [4, 1.5, 5])
			.placeNearTarget();
		scene.idle(10)
		scene.world.showSection([4,1,5,  6,1,5], Direction.up);
		scene.world.showSection([5,1,4,  5,1,6], Direction.up);
		scene.idle(50);
		scene.text(55, "Для завершения первого слоя, окружите всё §9Полированным §9тёмным §9камнем", [0, 1.5, 5])
			.independent();
		scene.idle(10)
		scene.world.showSection([0,1,0,  10,1,10], Direction.up);
		scene.idle(50);
		scene.text(50, "В конце, разместите §9стол кузнеца §rв центре...", [0, 1.5, 5])
			.independent()
			.attachKeyFrame();
		scene.world.setBlock([5,2,5], "minecraft:smithing_table", false);
		scene.idle(10);
		scene.world.showSection([5,2,5], Direction.down);
		scene.idle(40)
		scene.text(50, "...и нажмите ПКМ с §4Порошком §4очищения", [0, 1.5, 5])
			.independent();
		scene.idle(10);
		scene.showControls(30, [5, 3.5, 4], "right")
			.rightClick()
			.withItem("forbidden_arcanus:mundabitur_dust");
		scene.idle(25)
		scene.world.createEntity("forbidden_arcanus:crimson_lightning_bolt", [5, 3, 5]);
		scene.idle(10);
		scene.world.setBlock([5,2,5], "forbidden_arcanus:hephaestus_forge", true);
		scene.idle(15);
		scene.text(50, "Та-да! §9Кузница §9Гефеста §rполностью сформирована", [0, 1.5, 5])
			.independent()
			.attachKeyFrame();
		scene.idle(30);
	});
});