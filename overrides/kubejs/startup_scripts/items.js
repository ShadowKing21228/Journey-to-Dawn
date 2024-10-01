StartupEvents.registry('item', event => {
	event.create('sanity_pill').food(food => {
		food
			.hunger(2)
    		.saturation(0.4)//This value does not directly translate to saturation points gained
      		//The real value can be assumed to be:
      		//min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      		//.effect('night_vision', 200, 0, 1)
      		.alwaysEdible()//Like golden apples
      		// .fastToEat()//Like dried kelp
      		.eaten(ctx => {//runs code upon consumption
					ctx.player.tell(Text.gold('Вы чувствуете, как разум проясняется...'))
          		//If you want to modify this code then you need to restart the game.
          		//However, if you make this code call a global startup function
          		//and place the function *outside* of an event handler
          		//then you may use the command:
          		//  /kubejs reload startup_scripts
          		//to reload the function instantly.
          		//See example below
        	})
	})
})
StartupEvents.registry('item', event => {
	event.create('oversanity_pill').food(food => {
		food
			.hunger(4)
    		.saturation(0.8)//This value does not directly translate to saturation points gained
      		//The real value can be assumed to be:
      		//min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      		//.effect('night_vision', 200, 0, 1)
      		.alwaysEdible()//Like golden apples
      		// .fastToEat()//Like dried kelp
      		.eaten(ctx => {//runs code upon consumption
					ctx.player.tell(Text.gold('Ваш разум абсолютно чист...'))
          		//If you want to modify this code then you need to restart the game.
          		//However, if you make this code call a global startup function
          		//and place the function *outside* of an event handler
          		//then you may use the command:
          		//  /kubejs reload startup_scripts
          		//to reload the function instantly.
          		//See example below
        	})
	})
})
StartupEvents.registry('item', e => {
    e.create("wood_bast").maxStackSize(64).burnTime(200)
	.food((food) => {
      food
        .hunger(1)
        .saturation(1)
        .effect("minecraft:hunger", 100, 0, 1)
        .effect("minecraft:slowness", 100, 1, 1)
        .effect("minecraft:resistance", 200, 1, 1)
        .fastToEat();
    })
})

StartupEvents.registry('item', e => {
  e.create('ametrine_fabric').maxStackSize(64)
})
StartupEvents.registry('item', e => {
  e.create('wool_cloth').maxStackSize(64)
})
StartupEvents.registry('item', e => {
  e.create('etheric_larva').maxStackSize(1)
})
StartupEvents.registry('item', e => {
  e.create('magma_bucket').maxStackSize(1)
})
StartupEvents.registry('item', e => {
  e.create('unawakened_compass_blank').maxStackSize(1)
})
StartupEvents.registry('item', e => {
  e.create('twilight_edelweiss').maxStackSize(16)
})
StartupEvents.registry('item', e => {
  e.create('raw_extended_portal_key').maxStackSize(8)
})
StartupEvents.registry('item', e => {
  e.create('sharpened_depthrock_pebble').maxStackSize(64)
})
StartupEvents.registry('item', e => {
  e.create('depthrock_blacksmith_gavel_head').maxStackSize(16)
})
StartupEvents.registry('item', e => {
  e.create('diamond_nugget').maxStackSize(64)
})
StartupEvents.registry('item', e => {
  e.create('depthrock_hatchet', 'axe')
  .tier('wooden')
  .attackDamageBaseline(4.0)
  .maxDamage(16.0)
})

StartupEvents.registry('item', e => {
  e.create('hide_and_seek_ticket').maxStackSize(16)
  .rarity('uncommon')
  .tooltip('§o§eКоль хочешь наград, выходи погулять.')
  .tooltip('§o§eC тобой под землёй в игру я сыграю,')
  .tooltip('§o§eНа кон артефакты свои оставляю:')
  .tooltip('§o§eЯ спрячусь, а ты меня будешь искать')
})