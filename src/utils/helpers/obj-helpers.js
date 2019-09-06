export const updateObjectInArray = (items, itemsID, objPropName, newObjProps) => {

  return items.map(u => {
        if (u[objPropName] === itemsID) {
            return { ...u, ...newObjProps }
        }
        return u;
    })
}

