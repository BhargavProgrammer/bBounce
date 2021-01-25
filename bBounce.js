function bBounce(paper , rock){
if(paper.x - rock.x <= paper.width/2 + rock.width/2&&
    rock.x - paper.x <=rock.width/2 + paper.width/2){
        return true;
    }

if(paper.y - rock.y <= paper.height/2 + rock.height/2&&
    rock.y - paper.y <= rock.height/2 + paper.height/2){
     paper.velocityY = paper.velocityY*(-1) ;  
     rock.velocityY = rock.velocityY*(-1);
    }
}
