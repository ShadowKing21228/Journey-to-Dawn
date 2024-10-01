Ponder.registry((event) => {
    event.create("dimdungeons:block_portal_keyhole").scene("dimdungeon_portal", "Постройка портала в Измерения Подземелий", "kubejs:dimdungeon_portal", (scene, util) =>{
		scene.showBasePlate();
		scene.world.showSection([0,1,4, 8,3,4], Direction.up);
		scene.world.showSection([4,4,4], Direction.up);
		scene.idle(20)
		scene.text(55, "Так выглядит портал в §eИзмерения §eПодземелий", [0, 1.5, 7])
			.independent();
		scene.idle(55)
		scene.world.hideSection([0, 1, 4,  8, 3, 4], Direction.down)
		scene.world.hideSection([4, 4, 4], Direction.down);
		scene.idle(10)
		scene.text(55, "Следуйте этому гайду, если хотите построить его", [0, 1.5, 7])
			.independent();
		scene.idle(65);
		scene.text(55, "Начните с размещения §eКаменных §eкирпичей §rв указанные места", [1, 1.5, 4])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([1,1,4], Direction.down);
		scene.idle(3);
		scene.world.showSection([4,1,4], Direction.down);
		scene.idle(3);
		scene.world.showSection([7,1,4], Direction.down);
		scene.idle(3);
		scene.world.showSection([1,2,4], Direction.down);
		scene.idle(3);
		scene.world.showSection([3,2,4], Direction.down);
		scene.idle(3);
		scene.world.showSection([5,2,4], Direction.down);
		scene.idle(3);
		scene.world.showSection([7,2,4], Direction.down);
		scene.idle(3);
		scene.world.showSection([3,3,4], Direction.down);
		scene.idle(3);
		scene.world.showSection([5,3,4], Direction.down);
		scene.idle(30);
		scene.text(45, "Затем, поставьте §eПозолоченные §eблоки §eпортала §rна каменные колонны", [1, 3.5, 4])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([1,3,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([7,3,4], Direction.up);
	    scene.idle(35);
		scene.text(55, "Для завершения постройки, закольцуйте рамку §eПортальной §eзамочной §eскважиной", [4, 4.5, 4])
			.placeNearTarget();
		scene.world.modifyBlock([4, 4, 4], (curState) => curState.with("lit", "false"), false);
		scene.world.showSection([4,4,4], Direction.down);
		scene.idle(65)
		scene.text(50, "Вставьте в замочную скважину активированный §eКлюч §eпортала...§r", [4, 4.5, 4])
			.placeNearTarget();
		scene.idle(10);
		scene.showControls(30, [4.6, 4.5, 4], "right")
			.rightClick()
			.withItem("dimdungeons:item_portal_key");
		scene.idle(25)
		scene.world.modifyBlock([4, 4, 4], (curState) => curState.with("lit", "true"), false);
		scene.world.showSection([4,3,4], Direction.north);
		scene.world.showSection([4,2,4], Direction.north);
		scene.idle(10);
		scene.text(25, "...И та-да! Портал в §eИзмерения §eПодземелий §rоткрыт", [0, 1.5, 7])
			.independent();
	    scene.idle(25);
    });
});


Ponder.registry((event) => {
    event.create("dimdungeons:block_portal_keyhole").scene("dimdungeon_portal_upg", "Улучшение портала в Измерения Подземелий", "kubejs:dimdungeon_portal", (scene, util) =>{
		scene.showBasePlate();
		scene.world.showSection([0,1,0, 3,3,8], Direction.up);
		scene.world.showSection([8,1,0, 5,3,8], Direction.up);
		scene.world.showSection([4,1,4], Direction.up);
		scene.world.modifyBlock([4, 4, 4], (curState) => curState.with("lit", "false"), false);
		scene.world.showSection([4,4,4], Direction.up);
		scene.idle(15)
		scene.text(45, "Что нужно сделать для §aулучшения§r портала в §eИзмерения §eПодземелий:", [0, 1.5, 7])
			.independent();
		scene.idle(55)
		scene.text(55, "Шаг первый: разместите по бокам от верха прохода §eПортальные §eкоронные §eблоки", [3, 4.5, 4])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([3,4,4], Direction.down);
		scene.idle(3);
		scene.world.showSection([5,4,4], Direction.down);
		scene.idle(30);
		scene.text(45, "Шаг второй, поставьте на §eПозолоченные §eблоки §eпортала §r флаги...", [0, 1.5, 7])
			.independent();
		scene.idle(55)
		scene.world.setBlock([1, 3, 3], "minecraft:white_wall_banner", true);
		scene.text(35, "...белого цвета...", [1, 3.5, 3])
			.placeNearTarget();
		scene.idle(40);
		scene.world.setBlock([7, 3, 3], "minecraft:purple_wall_banner", true);
		scene.text(35, "...либо фиолетового цвета", [7, 3.5, 3])
			.placeNearTarget();
		scene.idle(45);
		scene.text(50, "Теперь вы можете использовать §aпродвинутые §aключи §aпортала", [4, 4.5, 4])
			.placeNearTarget()
			.attachKeyFrame();
		scene.idle(10);
		scene.showControls(30, [4.6, 4.5, 4], "right")
			.rightClick()
			.withItem("dimdungeons:item_blank_advanced_key");
		scene.idle(25)
		scene.world.modifyBlock([4, 4, 4], (curState) => curState.with("lit", "true"), false);
		scene.world.showSection([4,3,4], Direction.north);
		scene.world.showSection([4,2,4], Direction.north);
		scene.text(50, "Портал в §eИзмерения §eПодземелий §rбыл успешно улучшен", [0, 1.5, 7])
			.independent();
		scene.idle(30);
    });
});