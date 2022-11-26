console.log("im here!")



let unit = function () {
fetch('https://api.spotify.com/v1/search?q=fkj&type=artist', {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQBWgeIS3R9ef77DZVfcg1AWLUuCQx2FvkqDIRTzPdeBWrijYKJaM4A6h5fMod5Npbeq7uhAecGeHK67yU1oCevGG1Pm3eo6mI9blMnk6rK0ldNQlekmXvCuAMEMg8Yn6R87IJtAVTr4V4_33j7AImNrxB2oVX_1X3DexUUISFIYhNSl'
    }
})
console.log("mf here")
}

unit()