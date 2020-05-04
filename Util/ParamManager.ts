var pMap = new Map();
export class ParamManager {
  dataTableV(dataTable: any) {
    var result = dataTable.rowsHash();
    let tempArray = [];
    tempArray.push(result);
    tempArray.forEach(element => {
      return (pMap = element);
    });
  }

  dataTableH(dataTable: any) {
    var result = dataTable.hashes();
    let tempArray = [];
    tempArray.push(result);
    tempArray.forEach(element => {
      return (pMap = element);
    });
  }

  getParamV(key: any) {
    return pMap[key];
  }

  getPMap() {
    return pMap;
  }

  getParamH(key: any) {
    return pMap[0][key];
  }
}
