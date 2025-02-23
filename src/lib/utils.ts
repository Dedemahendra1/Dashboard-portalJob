import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import moment from "moment";
import bcrypt from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dateFormat = (date: any, format: string = "DD MMM YYYY") => {
	return moment(date).format(format);
};

export const hashPassword = async (password: string) => {
	const hashedPassword = await bcrypt.hash(password, 8);

	return hashedPassword;
};

export const comparePassword = async (
	password: string,
	hashedPassword: string
) => {
	const isMatch = await bcrypt.compare(password, hashedPassword);

	return isMatch;
};

export async function fetcher<JSON = any>(
	input: RequestInfo,
	init?: RequestInit
): Promise<JSON> {
	const res = await fetch(input, init);

	return res.json() as Promise<JSON>;
}
