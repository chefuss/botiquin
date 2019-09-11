 var botiquin = [
        ['Aspirina', 21], 
        ['Ibuprofeno', 5],
        ['Amoxicilina', 12],
        ['Ácido Clavulánico', 0],
        ['Buscapina', 30],
        ['Ranitidina', 12],
        ['Sertal', 0],
        ['Omeprazol', 3],
        ['Paracetamol', 34]
    ];
    function filterMedicine(medicine) {
        for (var i = 0; i < botiquin.length; i++) {
            if (botiquin[i][0] == medicine) {
                return true;
            } 
        }
        return false;
    }
    function filterQuantity(medicine) {
        for (var i = 0; i < botiquin.length; i++) {
            if (botiquin[i][0] == medicine) {
                 return botiquin[i][1];
            }
        }
        return false;
    } 
