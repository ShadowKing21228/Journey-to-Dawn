StartupEvents.registry('item', event => {
	event.create('fried_ender_dragon_egg').food(food => {
		food
			.hunger(12)
    		.saturation(4.2)//This value does not directly translate to saturation points gained
      		.effect("minecraft:wither", 300, 1, 1)
			.effect("alexsmobs:sunbird_blessing", 300, 1, 1)
			.effect("enigmaticlegacy:molten_heart", 500, 1, 1)
			.effect("forbidden_arcanus:spectral_vision", 500, 1, 1)
			.effect("forbidden_arcanus:darkened", 400, 1, 1)
      		.alwaysEdible()//Like golden apples
    })
})

StartupEvents.registry('item', e => {
  e.create('elegy_of_memories').maxStackSize(1)
  .rarity('legendary')
  .tooltip('§5§oНавевает воспоминания, канувшие в небытие')
})
StartupEvents.registry('item', e => {
  e.create('scroll_of_harmony').maxStackSize(1)
  .rarity('legendary')
  .tooltip('§5Сила искусствва, заточённая в клочке бумаги')
})
StartupEvents.registry('item', e => {
  e.create('catalytic_essence').maxStackSize(16)
  .rarity('legendary')
  .tooltip('§5§oМаленькая точка на конце реальности длиной в мгновение, шириной в бытие, высотой в бесконечность')
})
StartupEvents.registry('item', e => {
  e.create('cluster_of_amberia').maxStackSize(16)
  .rarity('legendary')
  .tooltip('§6§oКусочек времени, заточённый в бесконечно вечном')
})
StartupEvents.registry('item', e => {
  e.create('elven_flare').maxStackSize(64)
  .rarity('rare')
  .glow(true)
  .tooltip('§o§b Жар, обжигающий как звёзды, в клетке, что холодна как лёд')
})
StartupEvents.registry('item', e => {
  e.create('overcompressed_stone_chunk').maxStackSize(16)
})
StartupEvents.registry('item', e => {
  e.create('empty_catalyst').maxStackSize(64)
})
StartupEvents.registry('item', e => {
  e.create('inactive_catalyst').maxStackSize(64)
})
StartupEvents.registry('item', e => {
  e.create('unawakened_catalyst').maxStackSize(64)
})
StartupEvents.registry('item', e => {
  e.create('fractured_catalyst').maxStackSize(64)
})


StartupEvents.registry('item', e => {
  e.create('amberia_shard_1').maxStackSize(64).rarity('legendary')
})
StartupEvents.registry('item', e => {
  e.create('amberia_shard_2').maxStackSize(64).rarity('legendary')
})
StartupEvents.registry('item', e => {
  e.create('amberia_shard_3').maxStackSize(64).rarity('legendary')
})
StartupEvents.registry('item', e => {
  e.create('amberia_shard_4').maxStackSize(64).rarity('legendary')
})
StartupEvents.registry('item', e => {
  e.create('amberia_shard_5').maxStackSize(64).rarity('legendary')
})
StartupEvents.registry('item', e => {
  e.create('amberia_shard_6').maxStackSize(64).rarity('legendary')
})
StartupEvents.registry('item', e => {
  e.create('amberia_shard_7').maxStackSize(64).rarity('legendary')
})
StartupEvents.registry('item', e => {
  e.create('amberia_shard_8').maxStackSize(64).rarity('legendary')
})
StartupEvents.registry('item', e => {
  e.create('amberia_shard_9').maxStackSize(64).rarity('legendary')
})
StartupEvents.registry('item', e => {
  e.create('amberia_shard_10').maxStackSize(64).rarity('legendary')
})
StartupEvents.registry('item', e => {
  e.create('amberia_shard_11').maxStackSize(64).rarity('legendary')
})
StartupEvents.registry('item', e => {
  e.create('amberia_shard_12').maxStackSize(64).rarity('legendary')
})


