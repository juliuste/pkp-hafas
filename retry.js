'use strict'

const createClient = require('hafas-client')
const withRetrying = require('hafas-client/retry')
const pkpProfile = require('hafas-client/p/pkp')

const createRetryingClient = (userAgent, opt = {}) => {
	const {retryOpts} = {retryOpts: {}, ...opt}

	const retryingProfile = withRetrying(pkpProfile, retryOpts)
	return createClient(retryingProfile, userAgent, opt)
}

module.exports = createRetryingClient
