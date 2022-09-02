/* Basic Hacking Script for BitBurner */

var result;

export async function main(ns) {
    ns.print("Starting script here");
	result = await ns.scan();
    ns.print(result);
    ns.print("Script finished");
    
}