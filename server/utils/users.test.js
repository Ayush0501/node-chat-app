const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Mr. A',
			room: 'No. 1'
		}, {
			id: '2',
			name: 'Mr. B',
			room: 'No. 2'
		}, {
			id: '3',
			name: 'Mr. C',
			room: 'No. 1'
		}];
	})

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Ayush',
			room: 'Test Room'
		}
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove user', () => {
		var user = users.removeUser('1');

		expect(user.id).toBe('1');
		expect(users.users.length).toBe(2);
	});

	it('should not remove user', () => {
		var user = users.removeUser('99');

		expect(user).toNotExist;
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var user = users.getUser('1');

		expect(user.id).toBe('1');
	});

	it('should not find user', () => {
		var user = users.getUser('99');

		expect(user).toNotExist();
	});

	it('should return names for No.1', () => {
		var userList = users.getUserList('No. 1');

		expect(userList).toEqual(['Mr. A','Mr. C']);
	});

	it('should return names for No.2', () => {
		var userList = users.getUserList('No. 2');

		expect(userList).toEqual(['Mr. B']);
	});
});