yc.inner.building.Building = cc.Sprite.extend({  

    hexgon: null
    
    , put: function(hexgon){
        hexgon.building = this ;
        hexgon.block = true ;
        this.hexgon = hexgon ;
        this.setPosition(cc.p(hexgon.center[0],hexgon.center[1])) ;
        this.setVisible(true) ;
        
        // 重新计算地图路径
        yc.inner.InnerLayer.ins().cell.researchPath() ;
        
        return yc.inner.building.Building ;
    }
    , putOn: function(x,y){
        return this.put(yc.inner.InnerLayer.ins().cell.aAxes.hexgon(x,y)) ;
    }
    
    , draw: function(ctx){
        if(!this.hexgon)
        {
            return ;
        }

        ctx.fillStyle = "rgb(150,150,200)" ;
    
        ctx.beginPath() ;
        ctx.moveTo(0+15,0) ;
        ctx.arc(0,0, 15, 0, Math.PI*2 , false) ;
        ctx.closePath() ;
        
        ctx.fill() ;
        ctx.stroke() ;
    }
    
}) ;