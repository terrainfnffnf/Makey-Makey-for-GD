MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.ONE,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.DOWN,
MakeyMakey.MakeyMakeyKey.LEFT,
MakeyMakey.MakeyMakeyKey.RIGHT,
MakeyMakey.MakeyMakeyKey.W,
MakeyMakey.MakeyMakeyKey.G
)
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.ONE,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.DOWN,
MakeyMakey.MakeyMakeyKey.LEFT,
MakeyMakey.MakeyMakeyKey.RIGHT,
MakeyMakey.MakeyMakeyKey.LEFT_CLICK,
MakeyMakey.MakeyMakeyKey.G
)
let mySprite = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 f f f f f 2 2 4 4 2 2 e 
    c e e 2 f 2 f 2 f 2 2 2 2 2 2 e 
    c e e 2 f 2 f 2 f 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 f f f f f 2 4 2 e 
    . e e e 2 2 2 f 2 f 2 f 2 4 e . 
    . . e e 2 2 2 f 2 f 2 f 4 2 e . 
    . . . e e 2 2 2 2 2 4 4 2 e . . 
    . . . . . e e 4 4 4 2 e e . . . 
    . . . . . . . e e e e . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(137, 100)
