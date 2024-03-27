import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
	// A list of all locales that are supported
	locales: ['en', 'uz', 'ru'],

	// Used when no locale matches
	defaultLocale: 'uz',
})

export const config = {
	matcher: ['/', '/(ru|uz|en)/:path*'],
}
