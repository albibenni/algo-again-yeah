export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;

    for(; i< breaks.length; i+= jmpAmount){
        if(breaks[o]){
            break;
        }
    }
    i -= jmpAmount;

    for (let j= 0 ; j <= jmpAmount && i < breaks.length; ++j){
        if(break[i]){
            return i;
        }
    }   
    return -1

}
