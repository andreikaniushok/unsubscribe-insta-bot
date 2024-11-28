Instagram Unfollow Bot
This script automates the process of unfollowing accounts on Instagram by navigating to the "Following" page and clicking the "Unfollow" button for each account. The bot will also confirm the action by clicking the "Unfollow" confirmation button.

Features
Unfollows accounts by clicking the "Following" button on the profile page.
Confirms the unfollow action by clicking the "Unfollow" confirmation button.
Supports a limit on the number of accounts to unfollow in one session.
Introduces a delay between actions to mimic human-like interactions and avoid potential account blocking.
Requirements
This script runs in the browser's developer console (e.g., Chrome DevTools).
The script assumes you are already on the "Following" page of your Instagram account.
Usage
Open your Instagram profile page.
Click on the "Following" button to see the list of accounts you are following.
Open the browser's Developer Console:
In Chrome: Press Ctrl + Shift + I (Windows) or Cmd + Option + I (Mac) → Go to the Console tab.
Copy and paste the script into the console.
Modify the limit in the script if you want to unfollow a specific number of accounts (default is 20).
Press Enter to run the script.
Example:
javascript
Копировать код
unfollowAll(10);  // Unfollows 10 accounts
This will start unfollowing 10 accounts from your "Following" list.

How it Works
The script clicks the "Following" button to open the following list.
It waits for a short delay and looks for the "Unfollow" button.
Once the "Unfollow" button is found, it clicks it.
The script waits for another delay before clicking the confirmation button ("Unfollow").
The process continues for each account in your following list, based on the limit specified.
Customization
Limit: You can adjust the limit parameter to control how many accounts to unfollow per session.
Delays: The script introduces random delays between actions to simulate human behavior and reduce the risk of being flagged by Instagram.
Notes
Avoid using this script excessively. Instagram may detect automated actions if done in large batches over a short period.
Use the bot responsibly to avoid account suspension or blocking.
Disclaimer
This script is provided for educational purposes only. Use at your own risk. Instagram’s terms of service prohibit the use of bots or automation scripts on their platform. Please be aware of the potential risks involved.
