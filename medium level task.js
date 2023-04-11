let arr=[];
function createPlane(x,y) {
    
    for(let i=0;i<y;i++){
        arr[i]=[];
        for(let j=0;j<x;j++){
             arr[i][j]=0;
        }
    }
    arr[y-1][0]=1;

}

function move(swift){
    
        const row = arr.findIndex(row => row.includes(1));
        const col = arr[row].indexOf(1);
       
        console.log(row,col);

            if(swift=='right'){
                if (col==((arr[0].length)-1)){
                    arr[row][0]=arr[row][col];
                    

                }
                else{
                    arr[row][col+1]=arr[row][col]
                   
                }
            }
            else if(swift=='left'){
                if(col==0){
                    arr[row][(arr[0].length)-1]=arr[row][col];
                    
                }
                else{
                    arr[row][col-1]=arr[row][col]
                   
                }                                                                                                                                                                                  

    }
            else if(swift=='up'){
                if(row==0){
                    arr[(arr.length)-1][col]=arr[row][col];
                }
                else{
                    arr[row-1][col]=arr[row][col];

                }
       
            }

            else if(swift=='down'){
                if(row==(arr.length)-1){
                    arr[0][col]=arr[row][col];
                }
                else{
                    arr[row+1][col]=arr[row][col];
                }
        
    }
    arr[row][col]=0;

    console.log(arr);
}
createPlane(7,3);

move('right');


