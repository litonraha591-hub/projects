
function countHashtags(caption){
   
if(typeof caption === "string"){
    

    const splitHashTags = caption.split(" ")

    const filterHashTags= splitHashTags.filter(hashTags=>hashTags.startsWith("#"))
   let longsetTag = ""
   for(let i =0; i<filterHashTags.length; i++){
    const tag =filterHashTags[i].slice(1)
     if(tag.length > longsetTag.length){
        longsetTag=tag
     }
     
   }
 return {hashtagCount:filterHashTags.length, longestTag: longsetTag 
}


}

else{
    return "Invalid"
}
}

