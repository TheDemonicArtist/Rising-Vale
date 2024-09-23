/* ------------------------------------------------------------------- */
/* Sheet ID
/* Your sheet ID
/* ------------------------------------------------------------------- */
let sheetID = "1qo-A8MCnBepI7G-G4kUe0hQPrtfcOmkySp2kat2ZPas";
let galleryID = "1MLDeDvcM3AZJWTfd-Q6EmbR_oZRi5eU4dLUQrh1QGoA";


/* ------------------------------------------------------------------- */
/* All sheet pages
/* ------------------------------------------------------------------- */
let sheetPages = {

    masterlist: "masterlist",
    masterlistLog: "masterlist log",
    inventory: "inventory",
    inventoryLog: "inventory log",
    items: "items",
    traits: "traits",
    prompts: "prompts",
    faq: "faq",
    staff: "mods",
    updates: "updates",
    dragonlist: "dragons",
    stats: "stats",
    locations: "locations",
    gallery: "gallery",

}

/* ------------------------------------------------------------------- */
/* All sheet pages
/* ------------------------------------------------------------------- */
let sheetPages2 = {
    gallery: "gallery",
}

let options2 = {
    /* Prompts
    /* --------------------------------------------------------------- */
    gallery: {
    
        sheetPage: sheetPages2.gallery,

        itemAmount: 24,
        itemOrder: "desc",

        searchFilterParams: ['Title','Artists','Tags'],
    
    },
}

/* ------------------------------------------------------------------- */
/* All Site Options
/* ------------------------------------------------------------------- */
let options = {


    /* Index
    /* --------------------------------------------------------------- */
    index: {

        promptSheetPage: sheetPages.prompts,
        numOfPrompts: 3,

        staffSheetPage: sheetPages.staff,
        numOfStaff: 8,

        masterlistSheetPage: sheetPages.masterlist,
        numOfDesigns: 4,
    
    },


    /* Masterlist
    /* --------------------------------------------------------------- */
    masterlist: {

        sheetPage: sheetPages.masterlist,
        logSheetPage: sheetPages.masterlistLog,

        itemAmount: 12,
        itemOrder: "asc",

        filterColumn: 'Design Type',
        searchFilterParams: ['ID', 'Species', 'Owner', 'Designer', 'Artist', 'Traits'],
        fauxFolderColumn: 'Type',

    },

    /* Dragon Reference List
    /* --------------------------------------------------------------- */
    dragonlist: {

        sheetPage: sheetPages.dragonlist,
        

        itemAmount: 12,
        itemOrder: "alph",

        filterColumn: 'from',
        searchFilterParams: ['ID', 'Species', 'Artist', 'Availability'],
        fauxFolderColumn: 'rarity',

    },


    /* Item Catalogue
    /* --------------------------------------------------------------- */
    items: {

        sheetPage: sheetPages.items,
    
        itemAmount: 24,
        itemOrder: "Desc",
    
        filterColumn: 'Rarity',
        searchFilterParams: ['Item'],
        fauxFolderColumn: 'Type',
    
    },


    /* Inventory
    /* --------------------------------------------------------------- */
    inventory: {

        sheetPage: sheetPages.inventory,
        itemSheetPage: sheetPages.items,
        designSheetPage: sheetPages.masterlist,
        logSheetPage: sheetPages.inventoryLog,
    
        itemAmount: 24,
        sortTypes: ['Currency', 'MYO Slot', 'Pet', 'Trait', 'Misc'],
        
        searchFilterParams: ['Username'],
    
    },


    /* Prompts
    /* --------------------------------------------------------------- */
    prompts: {
    
        sheetPage: sheetPages.prompts,

        itemAmount: 24,
        itemOrder: "desc",

        searchFilterParams: ['Title'],
    
    },

    /* Prompts
    /* --------------------------------------------------------------- */
    gallery: {
    
        sheetPage: sheetPages2.gallery,

        itemAmount: 24,
        itemOrder: "desc",

        searchFilterParams: ['Title','Artists','Tags'],
    
    },


    /* Locations
    /* --------------------------------------------------------------- */
    locations: {
    
        sheetPage: sheetPages.locations,

        itemAmount: 24,
        itemOrder: "desc",

        searchFilterParams: ['Title'],
    
    },


    /* Traits
    /* --------------------------------------------------------------- */
    traits: {
    
        sheetPage: sheetPages.traits,

        itemAmount: 24,
        itemOrder: "asc",

        filterColumn: 'Rarity',
        searchFilterParams: ['Trait'],
        fauxFolderColumn: 'Type',
    
    },


    /* Staff
    /* --------------------------------------------------------------- */
    staff: {
    
        sheetPage: sheetPages.staff,
    
    },


    /* FAQ
    /* --------------------------------------------------------------- */
    faq: {
    
        sheetPage: sheetPages.faq,
    
        itemAmount: 24,
        itemOrder: "asc",
    
        searchFilterParams: ['Tags'],
    
    },

    /* Updates
    /* --------------------------------------------------------------- */
    updates: {
    
        sheetPage: sheetPages.updates,
    
        itemAmount: 24,
        itemOrder: "asc",
    
        searchFilterParams: ['Tags'],
    
    },


}