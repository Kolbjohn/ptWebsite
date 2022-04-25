module.exports = (sequelize, Sequelize) => {
    const Exercise = sequelize.define("exercise", {
        name: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
    });
    return Exercise;
  };