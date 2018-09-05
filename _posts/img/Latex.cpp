#include <bits/stdc++.h>

int main(int argv , char *args[])
{
	if(argv == 1)
	{
		puts("no input");
		return 1;
	}
	for(int i=1;i<argv;i++)
	{
		freopen(args[i],"r",stdin);
		freopen("nu","w",stdout);
		bool id = 0;
		for(int ch=getchar();~ch;ch=getchar())
		{
			if(ch == '$')
			{
				if(not id)
					printf("<img src=\"http://latex.codecogs.com/gif.latex?");
				else 
					printf("\\>");
			}
			else putchar(ch);
			ch = -1;
		}
	}
}
