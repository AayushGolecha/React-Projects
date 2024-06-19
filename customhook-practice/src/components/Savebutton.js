import useOnlineStatus from './useOnlineStatus';

export default function SaveButton() {
    const isOnline=useOnlineStatus()
    const handleSave = () => {
        console.log('Progress Saved')
    }
    return (
        <button disabled={!isOnline} onClick={handleSave}>
            {isOnline ? 'Save Progress' : 'Reconnecting...'}
        </button>
    )
}