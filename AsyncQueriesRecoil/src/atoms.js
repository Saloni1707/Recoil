import { atom, selector } from "recoil";

export const notifications = atom({
    key: "networkAtom",    //here this is the basic code which shows some lag,naive way of doing things!
    default: {
        network: 4, 
        jobs: 6, 
        messaging: 3, 
        notifications: 3
    }
});

export const notifications = atom ({
    key:"networkAtom",    //this is the optimal approach with the Async function in the Selector :)
    default: {
        key : "networkAtomSelector",
        get : async () => { //why do this ? kyunki we can't use directly the async func so used a Selector here
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    }
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})
