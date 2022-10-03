function setTitle(title) {
    faces = [
        `( ͡° ͜ʖ ͡°)`,
        `¯\_(ツ)_/¯`,
        `ಠ_ಠ`,
        `ಠ‿ಠ`,
        `ಠ⌣ಠ`,
        `ಠ╭╮ಠ`,
        `ಠoಠ`,
        `ಠ~ಠ`,
        `ಠ‿↼`,
        `ಠ_ృ`,
        `◉_◉`,
        `◔_◔`,
        `◕‿↼`,
        `◕‿◕`,
        `☉_☉`,
        `☜(⌒▽⌒)☞`,
        `ლ(´ڡ\`ლ)`,
        `ᕕ( ᐛ )ᕗ`,
        `ᕙ(⇀‸↼‶)ᕗ`,
        `ᕦ(ò_óˇ)ᕤ`,
        `ᶘ ᵒᴥᵒᶅ`,
        `(⌐■_■)`,
        `(¬‿¬)`,
        `(¬_¬)`,
        `(°ロ°)☝`,
        `(´・ω・)っ由`,
        `(ó ì_í)=óò=(ì_í ò)`,
        `(ʘᗩʘ')`,
        `(͡° ͜ʖ ͡°)`,
        `(ಠ_ರೃ)`,
        `(ಠ⌣ಠ)`,
        `(ಠ‿↼)`,
        `(ಠ_ృ)`,
        `(ಥ_ಥ)`,
        `(ಥ﹏ಥ)`,
        `(ง ͠° ͟ل͜ ͡°)ง`,
        `(ง ͡ʘ ͜ʖ ͡ʘ)ง`,
        `(ง •̀_•́)ง`,
        `(ง'̀-'́)ง`,
        `(ง°ل͜°)ง`,
        `(ง⌐□ل͜□)ง`,
        `(ღ˘⌣˘ღ)`,
        `(ᵔᴥᵔ)`,
        `(•ω•)`,
        `(•◡•)/`,
        `(⊙ω⊙)`,
        `(⌐■_■)`,
        `(─‿‿─)`,
        `(╯°□°）╯︵ ┻━┻`,
        `(◕‿◕✿)`,
        `(☞ﾟ∀ﾟ)☞`,
        `(づ｡◕‿‿◕｡)づ`,
        `(ノಠ益ಠ)ノ彡┻━┻`,
        `(ノ・∀・)ノ`,
        `(；一_一)`,
        `(｀◔ ω ◔´)`,
        `(¬_¬)`,
        `(¬º-°)`,
    ];
    
    if (document.hasFocus()) { document.title = title + faces[Math.floor(Math.random() * faces.length)];}
    else { document.title = 'Please come back! ' + faces[Math.floor(Math.random() * faces.length)]; }
    
    setTimeout(function() { setTitle(title) }, 100);
}