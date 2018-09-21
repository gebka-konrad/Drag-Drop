var successCallback = function (response) {
    var data = JSON.parse(response);
    SiteCreator.CreateSite(data);
    DragableManager.SetDragable();
}

JSONManager.GetJSON(successCallback);