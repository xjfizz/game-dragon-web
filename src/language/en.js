const en = {
    message: {
        loginSuccess: 'login was successful!',
        registerSuccess: 'register was successful!',
        passwordResetSuccess: 'Password reset succeeded!',
        loginFail: 'loginFail!',
        pleaseBindEmail: 'Please bind email address!',
        validEmail: 'Mail has been sent, please go to the mailbox to verify first!',
        pleaseWriteEamilAddress: 'Please fill in the email!',
        pleaseWriteEamilPassword: 'Please fill in the email password!',
        pleaseWriteEamilPassword6: 'Please enter a 6-digit password!',
        // pleaseBindWalletAddress: 'Your current address is not the same as the account binding address, please link the correct address.',
        pleaseBindWalletAddress: 'Your wallet address does not match your account',
        pleaseBindWalletAddressEmail: 'Please bind wallet address!',
        addressNotSamemyAddress: 'The DragonEgg address does not match your account',
        addressNotSamePayAddress: 'The pay address does not match your account',
        'receive.not.address': 'Wrong reception address',
        'dragon.on.locked': 'Your dragon has been locked, please try again in 5 minutes',
        'ok': 'OK',
        'access.token.err': 'AccessToken is invalid, please login again',
        'non.org.member.err': `If you aren't already a member, please join before proceeding.`,
        'fail': 'FAILED',
        'content.err': `The content doesn't comply with the audit requirements.`,
        'exists': 'The content is already exists and cannot be added again.',
        'err.403': 'Access to content is prohibited.',
        'err.404': 'Access to this content is no longer available.',
        'sys.err': 'A server error has occurred.',
        'non.owner': 'Non-owner',
        'non.owner.code': 'The redemption code address is invalid or not yours',
        'black.user': 'You have been put on the no-fly list.',
        'close': 'Finished',
        'username.err': 'The username supplied is incorrect; it must have 2-16 characters.',
        'password.err': 'Password is invalid, it should be 6-20 characters.',
        'username.exists': 'Username already exists.',
        'email.exists': 'Email address already exists.',
        'email.not.authenticated': 'Please check your email address first',
        'login.failed.err.username': 'Invalid Username',
        'login.failed.err.password': 'Invalid Password',
        'login.failed.err.too.often': 'Too many login attempts. Your account is now locked. Please try again in 5 minutes.',
        'login.err': 'The account is banned.',
        'authcode.err': 'The verification code is incorrect',
        'nickname.exists': 'This nickname is already exists',
        'password.ver.err': 'The password is incorrect',
        'third.login.failed.err': 'Unsuccessful login.',
        'third.login.failed.err.no.info': 'Logging in  was unsuccessful, there was no user data returned.',
        'login.failed.err.third': 'Logging in was unsuccessful.',
        'coin.balance.low': 'Insufficient balance',
        'reduce.coin.fail': 'Failure to consume',
        'add.coin.fail': 'Failure to add coins',
        'no.sign.card': 'The Reissue card has been depleted. (Jason wants recheck what this means)',
        'no.resign': 'There is no need to repeat the process.',
        'add.exp.fail': 'The attempt to add experience points was unsuccessful.',
        'third.authed': 'Authorization has been granted by the user.',
        'parameter.err': 'paramater error',
        'sign.err': 'sign error',
        'login.not.allowed': 'The account has been banned.',
        'reg.too.often': 'Too many sign up attemps.',
        'reg.error': 'Registration failure',
        'banned': 'Malicious access, ip, and/or device is banned.',
        'user.locked': 'The account has been banned.',
        'user.not.exists': 'No User exists.',
        'phone.registered': 'Your phone number has been registered to your account.',
        'sms.ip.too.often': 'The number of SMS verifications to this IP exceeds the maximum.',
        'sms.phone.too.often': `The number of SMS verification codes for this phone number exceeds the maximum.`,
        'sms.phone.too.often.60': `Try again in a minute or two if you've exceeded the maximum attempts.`,
        'sms.send.err': 'Verification code was not sent, please try again later.',
        'sms.send.outtime.err': 'Timed out',
        'sms.draw.err': 'An error occurred, try again.',
        'phone.no.err': 'Please double check your phone number.',
        'avatar.place.is.used.err': 'Your Avatar is now complete.',
        'avatar.place.max.4.err': 'There are a maximum of four Avatars that may be created.',
        'avatar.is.not.first': `This is not the first time it's been done. (Jason doesn't understand this)`,
        'no.face': 'Your Face is not recognizable.',
        'rool.no': 'Permission has been refused.',
        'goods.not.sale': 'This item is not available for purchase.',
        'order.discount.not.used': 'No coupon available',
        'order.discount.use.err': 'The coupon is unavailable, please contact the administrator.',
        'order.not.payed': 'Order has not been paid for',
        'order.opened': 'Order complete',
        'order.amount.err': 'The order amount does not match the total amount.',
        'tool.non.existent.err': 'There is no such tool.',
        'tool.expired.err': 'The tool is not valid.',
        'tool.use.max.err': 'Used too frequently, please use later.',
        'tool.use.ip.max.err': 'The IP address is being utilized far too frequently.',
        'contact.head.cate.name.err': 'Error in avatar classification',
        'relationship.myself.err': 'You cannot follow yourself.',
        'security.sign.err': `Sign is incorrect (Jason doesn't understand what this means)`,
        'black.word.err': 'There are banned terms in this document.',
        'feedback.err': `Take a rest now that we've received your feedback! (Jason doesn't understand)`,
        'vote.end.err': 'The voting period has come to a close.',
        'voted.err': 'You have cast your ballot.',
        'vote.than.max.err': 'The maximum number of votes has been reached.',
        'article.comment.praise.exist': 'Already liked',
        'too.comment.frequently': 'Your replies are too frequent',
        'too.comment.similarity': 'You have replied to the same question twice',
        'article.self.collect': 'It is not possible to collect articles on your own.',
        'article.collect.exist': `Have been collected (Jason doesn't understand)`,
        'article.del': 'Article has been deleted',
        'article.no.pic': 'Please upload pictures',
        'auction.end': 'The current auction has now closed.',
        'auction.low.price': 'Someone else has placed a bid.',
        'auction.rate.price.err': `Incorrect markup deviation (Jason doesn't understand)`,
        'user.follow': 'Following',
        'have.black': 'Blacklist',
        'user.unfollow': 'You must follow this user first',
        'user.no.init': 'User should be initialized',
        'org.department.exist.employee': 'The department or sub-department has personnel who cannot be removed.',
        'org.owner.del': `The organization's owner cannot be removed, instead, authorization must be transferred first.`,
        'breed.max': 'No longer able to reproduce',
        'dragon.is.death': 'This dragon has been consumed whole.',
        'dragon.on.sale': 'This dragon is on sale',
        'dragon.resting': 'During this period, dragons are unable to reproduce.',
        'dragon.lock': 'This dragon is locked.',
        'dragon.not.hatch': 'The dragon has not yet hatched.',
        'dragon.not.on.sale': `The dragon isn't available for purchase.`,
        'buyer.not.exists': 'The user who made the purchase does not exist.',
        'activity.not.start': 'The activity has not yet begun.',
        'activity.not.end': 'The activity is over.',
        'sell.out': 'Sold out',
        'only.buy.one.egg': 'Each person can only purchase one Genesis Dragon Egg.',
        'access.region.not.service': 'Services are not available in your region.',
        'third.authed': 'Authorization has been granted by the user.',
        'dragon.not.send': 'dragons that are staked , locked and for sale cannot be used for gifts',
        'tool.use.ip.max.err': 'The IP address is being utilized far too frequently',
        'purchase.failed.err': 'Purchase failed',
        'register.close': 'Because of the proliferation of registered users, the verification code sending is temporarily abnormal. We are fixing it now, please be patient.',
        'paying': 'Payment in progress, please do not refresh',
        'wait.pay.result': 'Wait for the payment result, please do not refresh',
        'pay.success': 'Payment successful',
    }
}
export default en