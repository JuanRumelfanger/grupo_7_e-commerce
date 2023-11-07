module.exports = (sequelize, DataTypes)=>{
    
    let alias = 'VideoGameDetail';
    let cols = {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        videoGameId: {
            type:DataTypes.INTEGER, 
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        images:{
            type: DataTypes.STRING,
            allowNull: false
        },
        size:{
            type:DataTypes.STRING,
            allowNull: false
        },
        requiments:{
            type:DataTypes.JSON,
            allowNull: false
        }
    }
    let config = {
        tableName:'VideoGameDetail',
        timestamps:false
    }

    const VideoGameDetail = sequelize.define(alias, cols, config);
    
    return VideoGameDetail;
}