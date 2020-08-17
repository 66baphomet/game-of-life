const patterns = document.querySelectorAll('img');

//blinker pattern
patterns[0].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[130] = true;
    gameStateArray[150] = true;
    gameStateArray[170] = true;

    autoGame();
})

//toad pattern
patterns[1].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[130] = true;
    gameStateArray[131] = true;
    gameStateArray[132] = true;
    gameStateArray[149] = true;
    gameStateArray[150] = true;
    gameStateArray[151] = true;

    autoGame();
})

//beacon pattern
patterns[2].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[130] = true;
    gameStateArray[131] = true;
    gameStateArray[150] = true;
    gameStateArray[173] = true;
    gameStateArray[192] = true;
    gameStateArray[193] = true;

    autoGame();
})

//pulsar pattern
patterns[3].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[44] = true;
    gameStateArray[45] = true;
    gameStateArray[46] = true;
    gameStateArray[50] = true;
    gameStateArray[51] = true;
    gameStateArray[52] = true;

    gameStateArray[82] = true;
    gameStateArray[87] = true;
    gameStateArray[89] = true;
    gameStateArray[94] = true;

    gameStateArray[102] = true;
    gameStateArray[107] = true;
    gameStateArray[109] = true;
    gameStateArray[114] = true;

    gameStateArray[122] = true;
    gameStateArray[127] = true;
    gameStateArray[129] = true;
    gameStateArray[134] = true;

    gameStateArray[122] = true;
    gameStateArray[127] = true;
    gameStateArray[129] = true;
    gameStateArray[134] = true;

    gameStateArray[144] = true;
    gameStateArray[145] = true;
    gameStateArray[146] = true;
    gameStateArray[150] = true;
    gameStateArray[151] = true;
    gameStateArray[152] = true;

    gameStateArray[184] = true;
    gameStateArray[185] = true;
    gameStateArray[186] = true;
    gameStateArray[190] = true;
    gameStateArray[191] = true;
    gameStateArray[192] = true;

    gameStateArray[202] = true;
    gameStateArray[207] = true;
    gameStateArray[209] = true;
    gameStateArray[214] = true;

    gameStateArray[222] = true;
    gameStateArray[227] = true;
    gameStateArray[229] = true;
    gameStateArray[234] = true;

    gameStateArray[242] = true;
    gameStateArray[247] = true;
    gameStateArray[249] = true;
    gameStateArray[254] = true;

    gameStateArray[284] = true;
    gameStateArray[285] = true;
    gameStateArray[286] = true;
    gameStateArray[290] = true;
    gameStateArray[291] = true;
    gameStateArray[292] = true;
    

    autoGame();
})

//I-column pattern
patterns[4].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[108] = true;
    gameStateArray[109] = true;
    gameStateArray[110] = true;

    gameStateArray[128] = true;
    gameStateArray[130] = true;

    gameStateArray[148] = true;
    gameStateArray[149] = true;
    gameStateArray[150] = true;

    gameStateArray[168] = true;
    gameStateArray[169] = true;
    gameStateArray[170] = true;

    gameStateArray[188] = true;
    gameStateArray[189] = true;
    gameStateArray[190] = true;

    gameStateArray[208] = true;
    gameStateArray[209] = true;
    gameStateArray[210] = true;

    gameStateArray[228] = true;
    gameStateArray[230] = true;

    gameStateArray[248] = true;
    gameStateArray[249] = true;
    gameStateArray[250] = true;

    autoGame();
})

//glider pattern
patterns[5].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[2] = true;

    gameStateArray[20] = true;
    gameStateArray[22] = true;

    gameStateArray[41] = true;
    gameStateArray[42] = true;

    autoGame();
})

//light weight spaceship pattern
patterns[6].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[21] = true;
    gameStateArray[24] = true;

    gameStateArray[45] = true;

    gameStateArray[61] = true;
    gameStateArray[65] = true;

    gameStateArray[82] = true;
    gameStateArray[83] = true;
    gameStateArray[84] = true;
    gameStateArray[85] = true;


    autoGame();
})

//middle weight spaceship pattern
patterns[7].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[43] = true;

    gameStateArray[61] = true;
    gameStateArray[65] = true;

    gameStateArray[86] = true;

    gameStateArray[101] = true;
    gameStateArray[106] = true;

    gameStateArray[122] = true;
    gameStateArray[123] = true;
    gameStateArray[124] = true;
    gameStateArray[125] = true;
    gameStateArray[126] = true;


    autoGame();
})

//heavy weight spaceship pattern
patterns[8].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[102] = true;
    gameStateArray[103] = true;

    gameStateArray[120] = true;
    gameStateArray[125] = true;

    gameStateArray[146] = true;

    gameStateArray[166] = true;
    gameStateArray[160] = true;

    gameStateArray[181] = true;
    gameStateArray[182] = true;
    gameStateArray[183] = true;
    gameStateArray[184] = true;
    gameStateArray[185] = true;
    gameStateArray[186] = true;



    autoGame();
})

//block pattern
patterns[9].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[127] = true;
    gameStateArray[128] = true;
    gameStateArray[147] = true;
    gameStateArray[148] = true;

    autoGame();
})

//beehive pattern
patterns[10].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[127] = true;
    gameStateArray[128] = true;
    gameStateArray[146] = true;
    gameStateArray[149] = true;
    gameStateArray[167] = true;
    gameStateArray[168] = true;

    autoGame();
})

//flower pattern
patterns[11].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[127] = true;
    gameStateArray[146] = true;
    gameStateArray[148] = true;
    gameStateArray[167] = true;

    autoGame();
})

//boat pattern
patterns[12].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[127] = true;
    gameStateArray[128] = true;
    gameStateArray[147] = true;
    gameStateArray[149] = true;
    gameStateArray[168] = true;

    autoGame();
})

//loaf pattern
patterns[13].addEventListener('click', ()=>{
    resetGame();

    gameStateArray[127] = true;
    gameStateArray[128] = true;
    gameStateArray[146] = true;
    gameStateArray[149] = true;
    gameStateArray[167] = true;
    gameStateArray[169] = true;
    gameStateArray[188] = true;

    autoGame();
})