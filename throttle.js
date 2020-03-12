'use strict'

const createClient = require('hafas-client')
const withThrottling = require('hafas-client/throttle')
const pkpProfile = require('hafas-client/p/pkp')

const createThrottledClient = (userAgent, opt = {}) => {
	const {
		throttlingLimit: limit,
		throttlingInterval: interval
	} = {
		throttlingLimit: 5,
		throttlingInterval: 1000, // 1s
		...opt
	}

	const throttledProfile = withThrottling(pkpProfile, limit, interval)
	return createClient(throttledProfile, userAgent, opt)
}

module.exports = createThrottledClient
