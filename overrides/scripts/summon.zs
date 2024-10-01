import crafttweaker.api.event.item.ItemTossEvent;
import crafttweaker.api.events.CTEventManager;
import stdlib.List;
import crafttweaker.api.entity.EntityType;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.entity.Entity;
import crafttweaker.api.text.FormattedText;
import crafttweaker.api.text.Component;
import crafttweaker.api.util.sequence.SequenceBuilder;
import crafttweaker.api.util.sequence.Sequence;
import crafttweaker.api.sequence.task.ISequenceTask;
import crafttweaker.api.sequence.task.type.SleepTask;
import crafttweaker.api.world.Level;
import crafttweaker.api.world.ServerLevel;
import math.Functions;
import crafttweaker.api.entity.MobSpawnType;
import crafttweaker.api.data.MapData;

public class Summoning{

    public static init() as void{
        register(new Summoning(<item:kubejs:hide_and_seek_ticket>, <entitytype:whatareyouvotingfor:rascal>, "twilightforest:labyrinth", Component.literal("Да начнётся игра!"), "minecraft:campfire_signal_smoke", 200));
    }


    public var summonEntity as EntityType<Entity>;
    public var item as IItemStack;
    public var structure as string;
    public var text as Component;
    public var particle as string;
    public var timeSummoning as int;

    public static val SUMMONING as List<Summoning> = new List<Summoning>();

    public this(item as IItemStack, summonEntity as EntityType<Entity>, structure as string){
        this.summonEntity = summonEntity;
        this.structure = structure;
        this.item = item;
        this.text = Component.empty();
        this.particle = "";
        this.timeSummoning = 0;
    }

    public this(item as IItemStack, summonEntity as EntityType<Entity>, structure as string, timeSummoning as int){
        this.summonEntity = summonEntity;
        this.structure = structure;
        this.item = item;
        this.text = Component.empty();
        this.particle = "";
        this.timeSummoning = timeSummoning;
    }

    public this(item as IItemStack, summonEntity as EntityType<Entity>, structure as string, particle as string){
        this.summonEntity = summonEntity;
        this.structure = structure;
        this.item = item;
        this.text = Component.empty();
        this.particle = particle;
    }

    public this(item as IItemStack, summonEntity as EntityType<Entity>, structure as string, particle as string, timeSummoning as int){
        this.summonEntity = summonEntity;
        this.structure = structure;
        this.item = item;
        this.text = Component.empty();
        this.particle = particle;
        this.timeSummoning = timeSummoning;
    }

    public this(item as IItemStack, summonEntity as EntityType<Entity>, structure as string, text as Component, particle as string){
        this.summonEntity = summonEntity;
        this.structure = structure;
        this.item = item;
        this.text = text;
        this.particle = particle;
    }
    public this(item as IItemStack, summonEntity as EntityType<Entity>, structure as string, text as Component, particle as string, timeSummoning as int){
        this.summonEntity = summonEntity;
        this.structure = structure;
        this.item = item;
        this.text = text;
        this.particle = particle;
        this.timeSummoning = timeSummoning;
    }

    protected static register(s as Summoning) as void{
        SUMMONING.add(s);
    }

}


CTEventManager.register<crafttweaker.api.event.item.ItemTossEvent>((event) => {
    val player =  event.player;
    val itemEntity = event.entityItem;

    if(player.level.isClientSide) return;

    val level = player.level;

    val d2 as ItemTossEvent = event;

    if(Summoning.SUMMONING.isEmpty) return;


    val zone as int = 4;
    for d1 in Summoning.SUMMONING{
        if(d1.item == itemEntity.getItem()){
            var isTrue = itemEntity.getStructureEntity(<resource:${d1.structure}>);
            if(!isTrue) continue;

            if(d1.timeSummoning != 0){
                level.sequence()
                .sleepUntil((itemEntity, context) => itemEntity.isOnGround)
                .run((itemEntity, context) => {
                    itemEntity.kill();
                })
                .sleep(d1.timeSummoning)
                .run((d2, context) => {
                    if(d1.text != Component.empty()){
                        d2.player.sendMessage(d1.text);
                    }

                    var levelD1 as ServerLevel = d2.player.level as Level as ServerLevel;
                    var theta as int = 0;
                    while(theta <= 360){

                        val g1 = d2.entityItem.level.dimension.toString();
                        val g2_x = d2.entityItem.x + zone*Functions.cos(theta);
                        val g2_y = d2.entityItem.y + 0.6;
                        val g2_z = d2.entityItem.z + zone*Functions.sin(theta);
                        levelD1.server.executeCommand("execute in " + g1 + " positioned " + g2_x + " " + g2_y + " " + g2_z + " run particle " + d1.particle + " ~ ~ ~ 6 6 6 0.001 100", true);
                        theta = theta + 10;
                    }

                    val e1 = d1.summonEntity.spawn(levelD1, new MapData(), null, null, d2.entityItem.onPos, MobSpawnType.NATURAL, true, false);
                    // levelD1.addFreshEntity(e1);
                }).start();
            } else {
                level.sequence()
                .sleepUntil((itemEntity, context) => itemEntity.isOnGround)
                .run((itemEntity, context) => {
                    itemEntity.kill();
                })
                .run((event, context) => {
                    if(d1.text != Component.empty()){
                        d2.player.sendMessage(d1.text);
                    }

                    var levelD1 as ServerLevel = d2.player.level as Level as ServerLevel;
                    var theta as int = 0;
                    while(theta <= 360){

                        val g1 = d2.entityItem.level.dimension.toString();
                        val g2_x = d2.entityItem.x + zone*Functions.cos(theta);
                        val g2_y = d2.entityItem.y + 0.6;
                        val g2_z = d2.entityItem.z + zone*Functions.sin(theta);
                        levelD1.server.executeCommand("execute in " + g1 + " positioned " + g2_x + " " + g2_y + " " + g2_z + " run particle " + d1.particle + " ~ ~ ~ 6 6 6 0.001 100", true);
                        theta = theta + 10;
                    }

                    val e1 = d1.summonEntity.spawn(levelD1, new MapData(), null, null, d2.entityItem.onPos, MobSpawnType.NATURAL, true, false);
                }).start();
            }

        }
    }
});


Summoning.init();