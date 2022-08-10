const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateId = () => {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export const loadFromDB = async (value) => {
    try {
        const response = await fetch('https://oxt6c15wvi.execute-api.us-east-1.amazonaws.com/Prod/' + value)
        if (!response.ok) {
            const res = "Load failed, sorry :( Error: " + response.statusText;
            return { success: false, text: res };
        }
        const data = await response.json()
        if (data.length !== 0) {
            return { success: true, data: data.plan }
        }
    }
    catch (error) {
        return { success: false, text: "Load failed, sorry :( Double check your plan ID" };
    }
};

export const saveToDB = async (value, plan) => {
    try {
        const id = value !== "" ? value : generateId();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, plan: plan })
        };
        const response = await fetch('https://oxt6c15wvi.execute-api.us-east-1.amazonaws.com/Prod', requestOptions)
        if (!response.ok) {
            const res = "Save failed, sorry :( Error: " + response.statusText;
            return { success: false, text: res };
        }
        const data = await response.json()
        if (data.length !== 0) {
            return { success: true, text: "Successfully saved plan with ID: " + id }
        }
    }
    catch (error) {
        return { success: false, text: "Save failed, sorry :(" };
    }
};