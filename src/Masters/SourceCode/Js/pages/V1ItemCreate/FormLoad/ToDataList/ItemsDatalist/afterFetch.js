const StartFunc = (data) => {

    data.forEach(element => {
        jFLocalAddToItems({ inItemName: element.ItemName });
    });
};

const jFLocalAddToItems = ({ inItemName }) => {
    const option = `<option value="${inItemName}">${inItemName}</option>`
    // var option = $('<option value="' + inItemName + '"></option>');
    $('#ItemNameDataListId').append(option);
};

export { StartFunc };