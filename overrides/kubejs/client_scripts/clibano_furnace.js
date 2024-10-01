Ponder.registry((event) => {
  	event.create("forbidden_arcanus:clibano_core").scene( "clibano_furnace", "Постройка печи Клибано", "kubejs:clibano_furnace", (scene, util) =>{
		let size = structureSize(5, 5, 5);
        showBasePlate(scene, size.width, size.depth);
		scene.text(55, "Сначала, разместите блоки §5Полированного §5тёмного §5камня §rпо краям", [1, 1.5, 1])
			.placeNearTarget();
		scene.idle(10)
		scene.world.showSection([1,1,1], Facing.DOWN)
		scene.idle(2)
		scene.world.showSection([3,1,1], Facing.DOWN)
		scene.idle(2)
		scene.world.showSection([1,1,3], Facing.DOWN)
		scene.idle(2)
		scene.world.showSection([3,1,3], Facing.DOWN)
		scene.idle(45);
		scene.text(55, "Затем, поставьте 5 блоков §5Полированных §5кирпичей §5из §5тёмного §5камня §rмежду ними", [1, 1.5, 2])
			.placeNearTarget();
		scene.idle(15)
		scene.world.showSection([2,1,1], Facing.DOWN)
		scene.idle(2)
		scene.world.showSection([1,1,2], Facing.DOWN)
		scene.idle(2)
		scene.world.showSection([2,1,2], Facing.DOWN)
		scene.idle(2)
		scene.world.showSection([3,1,2], Facing.DOWN)
		scene.idle(2)
		scene.world.showSection([2,1,3], Facing.DOWN)
		scene.idle(45);
		scene.text(55, "На втором слое сделайте кольцо из §5Полированных §5кирпичей §5из §5тёмного §5камня...", [1, 2.5, 2])
			.placeNearTarget()
			.attachKeyFrame();
		scene.idle(10)
		scene.world.showSection([1,2,1], Facing.DOWN)
		scene.idle(2)
		scene.world.showSection([1,2,2], Facing.DOWN)
		scene.idle(2)
		scene.world.showSection([1,2,3], Facing.DOWN)
		scene.idle(2)
		scene.world.showSection([2,2,3], Facing.DOWN)
		scene.idle(2)
		scene.world.showSection([3,2,3], Facing.DOWN)
		scene.idle(2)
		scene.world.showSection([3,2,2], Facing.DOWN)
		scene.idle(2)
		scene.world.showSection([3,2,1], Facing.DOWN)	
		scene.idle(50);
		scene.text(45, "...разместив в центре §5Ядро §5Клибано", [2, 2.5, 1])
			.placeNearTarget();
		scene.world.setBlocks([5, 4, 1], "forbidden_arcanus:clibano_core");
		scene.world.showSection([2,2,1], Facing.DOWN)
		scene.idle(55);
		scene.text(55, "Теперь, полностью повторите первый слой", [1, 1.5, 5])
			.independent();
		scene.idle(15)
		buildUpSlice(scene, size.width, size.depth, 3, 3, 3);
		scene.idle(45);
		scene.text(50, "Для активации нажмите ПКМ с §4Порошком §4очищения", [1, 1.5, 1])
			.placeNearTarget()
			.attachKeyFrame();
		scene.idle(10);
		scene.showControls(30, [2.5, 2.5, 1], "right")
			.rightClick()
			.withItem("forbidden_arcanus:mundabitur_dust");
		scene.idle(25)
		scene.world.modifyBlock([1, 1, 1], () => Block.id("forbidden_arcanus:clibano_corner").with("bottom", "true").with("facing", "west"), true);
		scene.world.modifyBlock([1, 1, 3], () => Block.id("forbidden_arcanus:clibano_corner").with("bottom", "true").with("facing", "south"), true);
		scene.world.modifyBlock([3, 1, 1], () => Block.id("forbidden_arcanus:clibano_corner").with("bottom", "true").with("facing", "north"), true);
		scene.world.modifyBlock([1, 3, 1], () => Block.id("forbidden_arcanus:clibano_corner").with("bottom", "false").with("facing", "west"), true);
		scene.world.modifyBlock([1, 3, 3], () => Block.id("forbidden_arcanus:clibano_corner").with("bottom", "false").with("facing", "south"), true);
		scene.world.modifyBlock([3, 3, 1], () => Block.id("forbidden_arcanus:clibano_corner").with("bottom", "false").with("facing", "north"), true);
		
		scene.world.modifyBlock([2, 1, 1], () => Block.id("forbidden_arcanus:clibano_side_vertical").with("bottom", "true").with("facing", "north"), true);
		scene.world.modifyBlock([1, 1, 2], () => Block.id("forbidden_arcanus:clibano_side_vertical").with("bottom", "true").with("facing", "west"), true);
		scene.world.modifyBlock([2, 3, 1], () => Block.id("forbidden_arcanus:clibano_side_vertical").with("bottom", "false").with("facing", "north"), true);
		scene.world.modifyBlock([1, 3, 2], () => Block.id("forbidden_arcanus:clibano_side_vertical").with("bottom", "false").with("facing", "west"), true);
		scene.world.modifyBlock([2, 3, 3], () => Block.id("forbidden_arcanus:clibano_side_vertical").with("bottom", "false").with("facing", "south"), true);
		scene.world.modifyBlock([3, 3, 2], () => Block.id("forbidden_arcanus:clibano_side_vertical").with("bottom", "false").with("facing", "east"), true);
		
		scene.world.modifyBlock([1, 2, 1], () => Block.id("forbidden_arcanus:clibano_side_horizontal").with("mirrored", "true").with("facing", "west"), true);
		scene.world.modifyBlock([3, 2, 1], () => Block.id("forbidden_arcanus:clibano_side_horizontal").with("mirrored", "false").with("facing", "north"), true);
		scene.world.modifyBlock([1, 2, 3], () => Block.id("forbidden_arcanus:clibano_side_horizontal").with("mirrored", "false").with("facing", "south"), true);
		
		scene.world.modifyBlock([2, 2, 1], () => Block.id("forbidden_arcanus:clibano_center").with("type", "FRONT_OFF").with("facing", "north"), true);
		scene.world.modifyBlock([1, 2, 2], () => Block.id("forbidden_arcanus:clibano_center").with("type", "SIDE").with("facing", "west"), true);
		scene.world.modifyBlock([2, 3, 2], () => Block.id("forbidden_arcanus:clibano_center").with("type", "TOP").with("facing", "up"), true);
		
		scene.idle(15)
		scene.text(50, "Та-да! §5Печь §5Клибано §rполностью сформирована", [1, 1.5, 1])
			.independent()	
		scene.idle(30);
	});
});