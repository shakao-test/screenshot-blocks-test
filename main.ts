controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.percentChance(60)) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
})
function test_function () {
    scene.setBackgroundColor(13)
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. a 3 . . . . . . . . . . . . . 
. a a . . . . a a a . . . . . . 
. . . . a a 1 1 1 1 a a . . . . 
. . . a a 1 1 3 3 1 1 a . . . . 
. . a a 1 1 3 1 3 3 1 a a . . . 
. . a a 1 3 3 3 1 3 3 1 a . . . 
. . a 1 1 3 3 3 3 3 3 1 a . . . 
. . a a 1 3 3 3 3 3 1 a a . . . 
. . . a 1 1 3 3 3 3 1 a . . . . 
. . . a a 1 1 3 3 1 1 a . . . . 
. . . . a a 1 1 1 1 a . . . . . 
. . . . . a a a a a . . . a . . 
. . . . . . . . . . . . a a a . 
. . . . . . . . . . . . a 3 . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    music.playMelody("- - - - - - - - ", 120)
}
let mySprite: Sprite = null
scene.setBackgroundColor(5)
game.onUpdate(function () {
    info.setLife(3)
})
