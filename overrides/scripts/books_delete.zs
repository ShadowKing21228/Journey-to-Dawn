import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.event.tick.PlayerTickEvent;

CTEventManager.register<crafttweaker.api.event.tick.PlayerTickEvent>((event) => {
    var player = event.player;

    var inventory = player.inventory;

    var data = player.getCustomData();
    if(!("guide_book_1" in data)) {
        for i1 in 0 .. inventory.getContainerSize() {
           var item1 = inventory.getItem(i1).asIItemStack();
           if(item1 == <item:patchouli:guide_book>.withTag({"patchouli:book": "irons_spellbooks:iss_guide_book"}) || item1.matches(<item:patchouli:guide_book>.withTag({"patchouli:book": "irons_spellbooks:iss_guide_book"}))) {
                inventory.setItem(i1, <item:minecraft:air>);
                data.setAt("guide_book_1", true);
                return;
           } 
        }   
    }
    if(!("guide_book_2" in data)) {
        for i2 in 0 .. inventory.getContainerSize() {
           var item2 = inventory.getItem(i2).asIItemStack();
           if(item2 == <item:patchouli:guide_book>.withTag({"patchouli:book": "parcool:parcool_guide"}) || item2.matches(<item:patchouli:guide_book>.withTag({"patchouli:book": "parcool:parcool_guide"}))) {
                inventory.setItem(i2, <item:minecraft:air>);
                data.setAt("guide_book_2", true);
                return;
           } 
        }   
    }
    if(!("guide_book_3" in data)) {
        for i3 in 0 .. inventory.getContainerSize() {
           var item3 = inventory.getItem(i3).asIItemStack();
           if(item3 == <item:byg:biomepedia> || item3.matches(<item:byg:biomepedia>)) {
                inventory.setItem(i3, <item:minecraft:air>);
                data.setAt("guide_book_3", true);
                return;
           } 
        }   
    }
    if(!("guide_book_4" in data)) {
    for i4 in 0 .. inventory.getContainerSize() {
       var item4 = inventory.getItem(i4).asIItemStack();
       if(item4 == <item:patchouli:guide_book>.withTag({"patchouli:book": "simplyswords:runic_grimoire"}) || item4.matches(<item:patchouli:guide_book>.withTag({"patchouli:book": "simplyswords:runic_grimoire"}))) {
            inventory.setItem(i4, <item:minecraft:air>);
            data.setAt("guide_book_4", true);
            return;
       } 
    }
    }   
});