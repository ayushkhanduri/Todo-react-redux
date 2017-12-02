export const AddTodo = (item) => (
    {
        type: "ADD_ITEM",
        item
    }
)

export const ChangeStatus = (key) => (
    {
        type: "CHANGE_STATUS",
        key
    }
)

export const ChangeFilter = (filter) => (
    {
        type: "CHANGE_FILTER",
        filter
    }
)

export const DeleteItem = (itemId) => (
    {
        type: "DELETE_ITEM",
        itemId
    }
)
