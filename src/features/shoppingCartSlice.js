import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'


const initialState = {
    value: [],
    total:0,
    clientData: {}
}

export const shoppingCartSlice = createSlice({
    name:'shoppingCart',
    initialState,
    reducers:{

        SetClientData:(state,action) =>
        {
            state.clientData = action.payload
        },

        ResetCart:(state) =>
        {
            state.value = []
            state.total = 0
        },

        TotalAmount:(state,action) => 
        {
            if(action.payload === 0)
            {
                state.total = 0
            }
            var total = 0
            state.value.map((item)=>
            {
                total = total + item.price * item.quantity
                state.total = total
            })
        },


        AddItem:(state,action) => 
        {
            const ItemId = action.payload.id
            const newItem = {
                ...action.payload, quantity:1
            }

            if(state.value.length === 0)
            {
                state.value.push(newItem)
                toast.success(`Added ${action.payload.name} to cart`)
            }
            else
            {
                const prevArray = [...state.value]
               
                let IsId = (element) => element.id === ItemId;
                if(prevArray.findIndex(IsId) === -1)
                {
                    state.value.push(newItem)
                    toast.success(`Added ${action.payload.name} to cart`)
                }
                else
                {
                    state.value.map((item)=>
                    {
                        if(item.id === ItemId)
                        {
                            item.quantity = item.quantity + 1
                        }
                    })
                }
            }
            
        },

        DeleteItem:(state,action) =>
        {
            const ItemId = action.payload.id
            state.value = state.value.filter((item) => item.id !== ItemId) 
            toast.error(`Deleted ${action.payload.name} from cart`)
        },

        IncrementItem:(state,action) =>
        {
            const ItemId = action.payload.id

            state.value.map((item)=>{
                if(item.id === ItemId)
                {
                    item.quantity = item.quantity + 1
                }
            })
        },
        DecrementItem:(state,action) =>
        {
            const itemPrice = action.payload.price
            const ItemId = action.payload.id

            state.value.map((item)=>{
                if(item.id === ItemId)
                {
                    if(item.quantity === 1)
                    {
                        state.value = state.value.filter((item) => item.id !== ItemId)  
                        state.total = state.total - itemPrice
                        toast.error(`Deleted ${action.payload.name} from cart`) 
                    }
                    else
                    {
                        item.quantity = item.quantity - 1
                    }
                }
            })
        },
    }
})

export const {AddItem,DeleteItem,IncrementItem,DecrementItem,TotalAmount,ResetCart,SetClientData} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer