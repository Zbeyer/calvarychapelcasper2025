import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/pwix:blaze-layout';

FlowRouter.route('/', {
	action() {
		BlazeLayout.render('layout', { main: 'home-page' });
		document.documentElement.lang = "en";
	}
});

FlowRouter.route('/mission', {
	action() {
		BlazeLayout.render('layout', { main: 'mission' });
	}
});