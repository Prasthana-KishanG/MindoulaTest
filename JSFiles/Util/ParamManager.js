"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pMap = new Map();
class ParamManager {
    dataTableV(dataTable) {
        var result = dataTable.rowsHash();
        let tempArray = [];
        tempArray.push(result);
        tempArray.forEach(element => {
            return (pMap = element);
        });
    }
    dataTableH(dataTable) {
        var result = dataTable.hashes();
        let tempArray = [];
        tempArray.push(result);
        tempArray.forEach(element => {
            return (pMap = element);
        });
    }
    getParamV(key) {
        return pMap[key];
    }
    getPMap() {
        return pMap;
    }
    getParamH(key) {
        return pMap[0][key];
    }
}
exports.ParamManager = ParamManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1NYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbC9QYXJhbU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLE1BQWEsWUFBWTtJQUN2QixVQUFVLENBQUMsU0FBYztRQUN2QixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMxQixPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxTQUFjO1FBQ3ZCLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVE7UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBUTtRQUNoQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUE5QkQsb0NBOEJDIn0=